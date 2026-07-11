<script>
  import { onMount } from 'svelte';
  import * as THREE from 'three';
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
  import { AsciiEffect } from 'three/examples/jsm/effects/AsciiEffect.js';
  import busModelUrl from '../assets/models/LeePerrySmith.glb?url';

  // Svelte 5 prop definition
  let { isLightTheme = false } = $props();

  let container;
  let renderer, asciiEffect, scene, camera, bust;
  let animationFrameId;
  let loaded = $state(false);

  // Pointer-driven parallax tilt (mirrors BoidsVisual's pointer interaction,
  // but here it steers the bust instead of repelling flock members)
  let targetRotX = 0;
  let targetRotY = 0;
  let currentRotX = 0;
  let currentRotY = 0;
  let autoRotY = 0;

  // AsciiGen palette (see AsciiGen/README.md "Weight-Based" design principles)
  const OBSIDIAN = '#0a0b0c';
  const LIMESTONE = '#e6e6dc';

  function applyPalette() {
    if (!asciiEffect) return;
    // Dark theme: limestone ink on obsidian. Light theme: obsidian ink on limestone.
    asciiEffect.domElement.style.color = isLightTheme ? OBSIDIAN : LIMESTONE;
    asciiEffect.domElement.style.backgroundColor = isLightTheme ? LIMESTONE : OBSIDIAN;
  }

  $effect(() => {
    // isLightTheme is read here so this block re-runs on theme toggle
    isLightTheme;
    applyPalette();
  });

  function handlePointerMove(e) {
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const nx = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const ny = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    targetRotY = nx * 0.5;
    targetRotX = ny * 0.3;
  }

  function handlePointerLeave() {
    targetRotX = 0;
    targetRotY = 0;
  }

  onMount(() => {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 6);

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.2);
    keyLight.position.set(3, 4, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 0.8);
    fillLight.position.set(-4, -1, 2);
    scene.add(fillLight);

    scene.add(new THREE.AmbientLight(0xffffff, 0.25));

    renderer = new THREE.WebGLRenderer();

    asciiEffect = new AsciiEffect(renderer, ' .:-=+*#%@', {
      resolution: 0.2,
      scale: 1,
      invert: true
    });
    asciiEffect.domElement.style.width = '100%';
    asciiEffect.domElement.style.height = '100%';
    // eslint-disable-next-line svelte/no-dom-manipulating
    container.appendChild(asciiEffect.domElement);

    const resize = () => {
      if (!container) return;
      const w = container.clientWidth || 1;
      const h = container.clientHeight || 1;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      asciiEffect.setSize(w, h);
      applyPalette();
    };
    resize();
    applyPalette();

    const loader = new GLTFLoader();
    loader.load(busModelUrl, (gltf) => {
      bust = gltf.scene;

      // Normalize position/scale so the head fills the frame consistently
      const box = new THREE.Box3().setFromObject(bust);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z) || 1;
      const targetSize = 3.2;
      bust.scale.multiplyScalar(targetSize / maxDim);
      bust.position.sub(center.multiplyScalar(targetSize / maxDim));

      bust.traverse((child) => {
        if (child.isMesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0xffffff,
            roughness: 0.6,
            metalness: 0.05
          });
        }
      });

      scene.add(bust);
      loaded = true;
    });

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);
    container.addEventListener('pointermove', handlePointerMove);
    container.addEventListener('pointerleave', handlePointerLeave);

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (bust) {
        // Slow auto-orbit, echoing BoidsVisual's ambient camera drift
        autoRotY += 0.0035;

        currentRotX += (targetRotX - currentRotX) * 0.05;
        currentRotY += (targetRotY - currentRotY) * 0.05;
        bust.rotation.x = currentRotX;
        bust.rotation.y = autoRotY + currentRotY;
      }

      asciiEffect.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('pointermove', handlePointerMove);
      container.removeEventListener('pointerleave', handlePointerLeave);
      cancelAnimationFrame(animationFrameId);
      scene.traverse((child) => {
        if (child.isMesh) {
          child.geometry.dispose();
          child.material.dispose();
        }
      });
      renderer.dispose();
    };
  });
</script>

<div bind:this={container} class="asciigen-container">
  {#if !loaded}
    <div class="asciigen-loading">[LOADING_VOLUME...]</div>
  {/if}
</div>

<style>
  .asciigen-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
    font-family: 'JetBrains Mono', monospace;
  }

  .asciigen-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 0.8rem;
    color: var(--text-muted);
    letter-spacing: 0.05em;
  }
</style>
