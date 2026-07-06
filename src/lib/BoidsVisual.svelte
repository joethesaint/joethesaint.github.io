<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';

  // Svelte 5 prop definition
  let { isLightTheme = false } = $props();

  let container;
  let renderer, scene, camera;
  let boids = [];
  let animationFrameId;
  let boidMaterial;

  let mouse = new THREE.Vector2();
  let mouseActive = false;
  const raycaster = new THREE.Raycaster();

  // Boids parameters (reduced count slightly for low-spec device friendliness while maintaining density)
  const BOID_COUNT = 80; 
  const BOUNDS = 85;
  const MAX_SPEED = 1.6;
  const MAX_FORCE = 0.04;

  const SEPARATION_DIST_SQ = 12 * 12;
  const ALIGN_DIST_SQ = 30 * 30;
  const COHESION_DIST_SQ = 30 * 30;

  const SEPARATION_WEIGHT = 1.6;
  const ALIGN_WEIGHT = 1.0;
  const COHESION_WEIGHT = 1.0;

  // Pre-allocated temporary vectors to eliminate GC allocations inside the loop
  const tempDiff = new THREE.Vector3();
  const tempSep = new THREE.Vector3();
  const tempAlign = new THREE.Vector3();
  const tempCoh = new THREE.Vector3();
  const tempSteer = new THREE.Vector3();

  class Boid {
    constructor() {
      // Random position within bounding box
      this.position = new THREE.Vector3(
        (Math.random() - 0.5) * BOUNDS,
        (Math.random() - 0.5) * BOUNDS,
        (Math.random() - 0.5) * BOUNDS
      );

      // Random velocity vector
      this.velocity = new THREE.Vector3(
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2,
        (Math.random() - 0.5) * 2
      ).normalize().multiplyScalar(Math.random() * MAX_SPEED);

      this.acceleration = new THREE.Vector3();

      // Cone geometry pointing along positive Z axis
      const geometry = new THREE.ConeGeometry(0.4, 1.8, 4);
      geometry.rotateX(Math.PI / 2);
      
      this.mesh = new THREE.Mesh(geometry, boidMaterial);
      this.mesh.position.copy(this.position);
      scene.add(this.mesh);
    }

    update() {
      this.velocity.add(this.acceleration);
      this.velocity.clampLength(0.1, MAX_SPEED);
      
      this.position.add(this.velocity);
      this.mesh.position.copy(this.position);

      if (this.velocity.lengthSq() > 0.001) {
        tempSteer.copy(this.position).add(this.velocity);
        this.mesh.lookAt(tempSteer);
      }

      this.acceleration.set(0, 0, 0);
      this.wrapBoundaries();
    }

    applyForce(force) {
      this.acceleration.add(force);
    }

    interactWithPoint(target) {
      const dSq = this.position.distanceToSquared(target);
      if (dSq < 32 * 32 && dSq > 0) {
        tempDiff.subVectors(this.position, target);
        const d = Math.sqrt(dSq);
        tempDiff.normalize();
        // Repulsion force: stronger as the cursor gets closer
        const forceMagnitude = (32 - d) * 0.12;
        tempDiff.multiplyScalar(forceMagnitude);
        this.applyForce(tempDiff);
      }
    }

    wrapBoundaries() {
      const halfBounds = BOUNDS / 2;
      if (this.position.x > halfBounds) this.position.x = -halfBounds;
      if (this.position.x < -halfBounds) this.position.x = halfBounds;
      if (this.position.y > halfBounds) this.position.y = -halfBounds;
      if (this.position.y < -halfBounds) this.position.y = halfBounds;
      if (this.position.z > halfBounds) this.position.z = -halfBounds;
      if (this.position.z < -halfBounds) this.position.z = halfBounds;
    }

    flock(boidsList) {
      tempSep.set(0, 0, 0);
      tempAlign.set(0, 0, 0);
      tempCoh.set(0, 0, 0);

      let sepCount = 0;
      let alignCount = 0;
      let cohCount = 0;

      for (let i = 0; i < boidsList.length; i++) {
        const other = boidsList[i];
        if (other === this) continue;

        // Use squared distance (massively faster; avoids square roots)
        const dSq = this.position.distanceToSquared(other.position);

        if (dSq > 0) {
          // Separation
          if (dSq < SEPARATION_DIST_SQ) {
            tempDiff.subVectors(this.position, other.position);
            tempDiff.normalize();
            // Weight separation force inversely by distance
            const d = Math.sqrt(dSq);
            tempDiff.divideScalar(d);
            tempSep.add(tempDiff);
            sepCount++;
          }

          // Alignment
          if (dSq < ALIGN_DIST_SQ) {
            tempAlign.add(other.velocity);
            alignCount++;
          }

          // Cohesion
          if (dSq < COHESION_DIST_SQ) {
            tempCoh.add(other.position);
            cohCount++;
          }
        }
      }

      // Calculate forces without vector re-allocation
      if (sepCount > 0) {
        tempSep.divideScalar(sepCount).normalize().multiplyScalar(MAX_SPEED).sub(this.velocity);
        tempSep.clampLength(0, MAX_FORCE);
        this.applyForce(tempSep.multiplyScalar(SEPARATION_WEIGHT));
      }
      if (alignCount > 0) {
        tempAlign.divideScalar(alignCount).normalize().multiplyScalar(MAX_SPEED).sub(this.velocity);
        tempAlign.clampLength(0, MAX_FORCE);
        this.applyForce(tempAlign.multiplyScalar(ALIGN_WEIGHT));
      }
      if (cohCount > 0) {
        tempCoh.divideScalar(cohCount);
        tempCoh.sub(this.position).normalize().multiplyScalar(MAX_SPEED).sub(this.velocity);
        tempCoh.clampLength(0, MAX_FORCE);
        this.applyForce(tempCoh.multiplyScalar(COHESION_WEIGHT));
      }
    }

    destroy() {
      scene.remove(this.mesh);
    }
  }

  // Reactive updates for theme changes using Svelte 5 $effect
  $effect(() => {
    if (boidMaterial && scene) {
      const color = isLightTheme ? 0x000000 : 0xffffff;
      const fogColor = isLightTheme ? 0xfcfcfc : 0x08080a;

      boidMaterial.color.setHex(color);
      scene.fog.color.setHex(fogColor);
    }
  });

  function handlePointerMove(e) {
    if (!container) return;
    const rect = container.getBoundingClientRect();
    mouse.x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    mouse.y = -((e.clientY - rect.top) / rect.height) * 2 + 1;
    mouseActive = true;
  }

  function handlePointerLeave() {
    mouseActive = false;
  }

  onMount(() => {
    scene = new THREE.Scene();
    
    // Initial color values based on current theme status
    const initialFogColor = isLightTheme ? 0xfcfcfc : 0x08080a;
    scene.fog = new THREE.FogExp2(initialFogColor, 0.007);

    const initialBoidColor = isLightTheme ? 0x000000 : 0xffffff;
    boidMaterial = new THREE.MeshBasicMaterial({ 
      color: initialBoidColor,
      wireframe: true
    });

    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || 500;
    
    camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 1000);
    camera.position.z = 85;

    renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true }); // Disabled MSAA for additional draw speed
    renderer.setSize(width, height);
    renderer.setPixelRatio(1); // Cap pixel ratio to 1 for lightweight mobile GPU processing
    container.appendChild(renderer.domElement);

    for (let i = 0; i < BOID_COUNT; i++) {
      boids.push(new Boid());
    }

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || window.innerWidth;
      const h = container.clientHeight || 500;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerleave', handlePointerLeave);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const time = Date.now() * 0.0001;
      camera.position.x = Math.sin(time) * 85;
      camera.position.z = Math.cos(time) * 85;
      camera.lookAt(scene.position);

      if (mouseActive) {
        raycaster.setFromCamera(mouse, camera);
        const targetPoint = new THREE.Vector3();
        raycaster.ray.at(65, targetPoint); // project pointer coordinate into flocking space

        for (let i = 0; i < boids.length; i++) {
          boids[i].interactWithPoint(targetPoint);
        }
      }

      for (let i = 0; i < boids.length; i++) {
        boids[i].flock(boids);
        boids[i].update();
      }

      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
      boids.forEach(boid => boid.destroy());
      boidMaterial.dispose();
      renderer.dispose();
    };
  });
</script>

<div bind:this={container} class="boids-canvas-container"></div>

<style>
  .boids-canvas-container {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    pointer-events: none;
    opacity: 0.65;
  }
</style>
