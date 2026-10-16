import * as T from 'three';

/* Reveal film: a pure function of time over keyframes (yaw / pitch / zoom / focus / apart / cut / gas / labels).
   Focus names are roles, resolved to whichever part the current design has. Motion blur is a directional + zoom smear
   sized by how far the picture moved since the last frame; it renders through a target only while the camera moves. */
const ROLES = {
  whole: [],
  inlet: ['Slurry inlet', 'Mixing inlet', 'Feed inlet', 'Inlet pipe'],
  body: ['Digester', 'Digestion chamber', 'Digester tank', 'Flexible digester bag'],
  takeoff: ['Gas takeoff', 'Gas outlet'],
  treat: ['Filter 2', 'Filter 1', 'Gas outlet', 'Gas takeoff'],
  store: ['Tyre-tube store', 'Fixed gas dome', 'Floating gas drum', 'Gas outlet'],
};
const KEYS = [
  {t: 0,    yaw: 228, pitch: 40, zoom: .62, focus: 'whole', apart: 0, cut: 0, gas: 0, labels: 0},
  {t: 1.9,  yaw: 45,  pitch: 35.26, zoom: 1, ease: 'io'},
  {t: 2.5,  yaw: 22,  pitch: 26, zoom: 2.5, focus: 'inlet', ease: 'whip'},
  {t: 3.5,  yaw: 16,  zoom: 2.7, ease: 'lin'},
  {t: 4.1,  yaw: 52,  pitch: 22, zoom: 1.9, focus: 'body', cut: 0, ease: 'whip'},
  {t: 5.3,  yaw: 58,  zoom: 2.0, cut: 1, ease: 'io'},
  {t: 6.4,  yaw: 62,  zoom: 2.1, cut: 1, gas: 0, ease: 'lin'},
  {t: 6.9,  yaw: 70,  pitch: 30, zoom: 2.4, focus: 'takeoff', cut: 0, gas: 1, ease: 'whip'},
  {t: 7.8,  yaw: 64,  zoom: 2.2, focus: 'treat', ease: 'io'},
  {t: 8.9,  yaw: 58,  zoom: 2.3, ease: 'lin'},
  {t: 9.4,  yaw: 92,  pitch: 24, zoom: 2.2, focus: 'store', ease: 'whip'},
  {t: 10.4, yaw: 98,  zoom: 2.3, gas: 1, apart: 0, labels: 0, ease: 'lin'},
  {t: 12.2, yaw: 40,  pitch: 32, zoom: .9, focus: 'whole', gas: 0, apart: 1, labels: 1, ease: 'io'},
  {t: 14.0, yaw: 22,  pitch: 34, zoom: .95, labels: 1, ease: 'lin'},
  {t: 15.6, yaw: 45,  pitch: 35.26, zoom: 1, apart: 0, labels: 0, ease: 'io'},
  {t: 16.5, yaw: 45,  zoom: 1, ease: 'lin'},
];
const DUR = 16.5;
const EASE = {
  lin: k => k,
  io: k => k < .5 ? 4 * k * k * k : 1 - Math.pow(-2 * k + 2, 3) / 2,
  whip: k => k < .5 ? 16 * Math.pow(k, 5) : 1 - Math.pow(-2 * k + 2, 5) / 2,
};
function chan(t, ch) {
  let a = null, b = null;
  for (const k of KEYS) { if (!(ch in k)) continue; if (k.t <= t) a = k; else { b = k; break; } }
  if (!b) return {a, b: a, k: 0};
  if (!a) return {a: b, b, k: 0};
  return {a, b, k: (EASE[b.ease] || EASE.io)((t - a.t) / (b.t - a.t))};
}
const num = (t, ch) => { const c = chan(t, ch); return c.a[ch] + (c.b[ch] - c.a[ch]) * c.k; };

/* app: {scene, camera, renderer, controls, viewport, root(), parts(), fit(), setApart(v), setGas(on), setLabels(on), onEnd()} */
export function createFilm(app) {
  const {scene, camera, renderer, controls, viewport} = app;
  const CLIP = new T.Plane(new T.Vector3(0, 0, -1), 1e3);   // keeps z <= constant; the iso camera sits on +z
  renderer.localClippingEnabled = true;
  const rt = new T.WebGLRenderTarget(1, 1, {samples: 4, type: T.HalfFloatType});
  const quadCam = new T.OrthographicCamera(-1, 1, 1, -1, 0, 1);
  const blurMat = new T.ShaderMaterial({
    uniforms: {tDiffuse: {value: rt.texture}, vel: {value: new T.Vector2()}, zm: {value: 0}, bg: {value: new T.Color()}},
    vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }',
    // the model is drawn over a transparent clear, tone-mapped here, then laid over the page background exactly as a
    // direct render shows it (the background itself is never tone-mapped), so the film never shifts the backdrop
    fragmentShader: `uniform sampler2D tDiffuse; uniform vec2 vel; uniform float zm; uniform vec3 bg; varying vec2 vUv;
      void main(){ vec4 a = vec4(0.0);
        for (int i = 0; i < 16; i++) { float s = float(i) / 15.0 - 0.5; a += texture2D(tDiffuse, vUv - vel * s - (vUv - 0.5) * zm * s); }
        a /= 16.0;
        gl_FragColor = vec4(a.rgb / max(a.a, 1e-4), 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
        gl_FragColor = vec4(mix(bg, gl_FragColor.rgb, clamp(a.a, 0.0, 1.0)), 1.0);
      }`,
    depthTest: false, depthWrite: false,
  });
  const quad = new T.Mesh(new T.PlaneGeometry(2, 2), blurMat);
  const quadScene = new T.Scene(); quadScene.add(quad);
  const title = document.createElement('div');
  title.className = 'filmtitle'; title.textContent = 'Biogas digester · B.Eng. project · rebuilt in three.js';
  viewport.append(title);
  const prevVP = new T.Matrix4(), curVP = new T.Matrix4();
  let film = null, prevZoom = 1;
  const reduced = () => matchMedia('(prefers-reduced-motion: reduce)').matches;

  function anchor(role) {
    const parts = app.parts();
    if (role !== 'whole') for (const name of ROLES[role]) {
      const p = parts.find(r => r.name === name);
      if (p) { const v = new T.Vector3(); p.g.getWorldPosition(v); v.y += .3; return v; }
    }
    return new T.Box3().setFromObject(app.root()).getCenter(new T.Vector3());
  }
  function clipping(on) {
    app.root().traverse(o => {
      const ms = o.material ? (Array.isArray(o.material) ? o.material : [o.material]) : [];
      for (const m of ms) { m.clippingPlanes = on ? [CLIP] : null; m.needsUpdate = true; }
    });
  }
  function start() {
    if (film) return stop();
    app.fit();
    film = {t0: performance.now(), pos: camera.position.clone(), tgt: controls.target.clone(), zoom: camera.zoom, started: false,
            frustum: [camera.left, camera.right, camera.top, camera.bottom], dist: camera.position.distanceTo(controls.target)};
    controls.enabled = false; clipping(true); viewport.classList.add('filming');
  }
  function stop(done) {
    if (!film) return;
    const f = film; film = null;
    CLIP.constant = 1e3; clipping(false);
    camera.position.copy(f.pos); controls.target.copy(f.tgt); camera.zoom = f.zoom; camera.up.set(0, 1, 0);
    camera.lookAt(f.tgt); camera.updateProjectionMatrix();
    controls.enabled = true; app.setApart(0); app.setGas(false); app.setLabels(false);
    viewport.classList.remove('filming'); title.classList.remove('on');
    app.onEnd(done);
  }
  function tick() {
    const t = film.hold ?? (performance.now() - film.t0) / 1000;   // real clock (rAF timestamps can run ahead); hold = poster frame
    if (t >= DUR) { stop(true); return; }
    app.setApart(num(t, 'apart')); app.setGas(num(t, 'gas') > .5); app.setLabels(num(t, 'labels') > .5);
    const cut = num(t, 'cut'), sm = cut * cut * (3 - 2 * cut);
    const f = chan(t, 'focus'), tgt = anchor(f.a.focus).lerp(anchor(f.b.focus), f.k);
    CLIP.constant = cut > .001 ? T.MathUtils.lerp(6, tgt.z + .01, sm) : 1e3;
    const yaw = T.MathUtils.degToRad(num(t, 'yaw')), pitch = T.MathUtils.degToRad(num(t, 'pitch'));
    const dir = new T.Vector3(Math.cos(pitch) * Math.sin(yaw), Math.sin(pitch), Math.cos(pitch) * Math.cos(yaw));
    [camera.left, camera.right, camera.top, camera.bottom] = film.frustum;
    camera.position.copy(tgt).addScaledVector(dir, film.dist); camera.zoom = num(t, 'zoom'); camera.up.set(0, 1, 0);
    camera.lookAt(tgt); camera.updateProjectionMatrix(); camera.updateMatrixWorld(); controls.target.copy(tgt);
    curVP.multiplyMatrices(camera.projectionMatrix, camera.matrixWorldInverse);
    const vel = blurMat.uniforms.vel.value;
    if (film.started && !reduced()) {
      const p1 = tgt.clone().applyMatrix4(curVP), p0 = tgt.clone().applyMatrix4(prevVP);
      vel.set((p1.x - p0.x) * .5, (p1.y - p0.y) * .5).clampLength(0, .07);
      blurMat.uniforms.zm.value = T.MathUtils.clamp(Math.log(camera.zoom / prevZoom), -.07, .07);
    } else { vel.set(0, 0); blurMat.uniforms.zm.value = 0; }
    film.started = true; prevVP.copy(curVP); prevZoom = camera.zoom;
    title.classList.toggle('on', t > 14.6 && t < 16.3);
  }
  function render() {
    // One path for the whole film: switching between direct and target rendering changed the background's tone
    // mapping from frame to frame, which flickered. Still frames simply get a zero-length smear.
    const size = renderer.getDrawingBufferSize(new T.Vector2());
    if (rt.width !== size.x || rt.height !== size.y) rt.setSize(size.x, size.y);
    const back = scene.background, clear = renderer.getClearColor(new T.Color()), clearA = renderer.getClearAlpha();
    if (back?.isColor) blurMat.uniforms.bg.value.copy(back).convertLinearToSRGB();
    scene.background = null; renderer.setClearColor(0x000000, 0);
    renderer.setRenderTarget(rt); renderer.render(scene, camera);
    scene.background = back; renderer.setClearColor(clear, clearA);
    renderer.setRenderTarget(null); renderer.render(quadScene, quadCam);
  }
  const hold = t => { if (film) film.hold = Math.min(t, DUR - .01); };
  return {start, stop, tick, render, hold, get active() { return !!film; }};
}
