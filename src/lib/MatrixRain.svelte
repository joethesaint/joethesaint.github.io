<script>
  import { onMount } from 'svelte';

  // Svelte 5 prop definition
  let { isLightTheme = false } = $props();

  let canvas;
  let ctx;
  let animationFrameId;
  let columns = [];
  let fontSize = 15;
  let lastStep = 0;

  // Terminal-flavored charset instead of traditional katakana, to match the
  // site's [BRACKETED_LABEL] / SYSTEM.STATUS developer aesthetic.
  const CHARS = '01<>[]{}/\\|=+-*#%@$_'.split('');

  function pickChar() {
    return CHARS[(Math.random() * CHARS.length) | 0];
  }

  function resize() {
    if (!canvas) return;
    const parent = canvas.parentElement;
    canvas.width = parent.clientWidth;
    canvas.height = parent.clientHeight;

    const columnCount = Math.ceil(canvas.width / fontSize);
    columns = new Array(columnCount).fill(0).map(() => ({
      y: (Math.random() * canvas.height) / fontSize,
      speed: 0.3 + Math.random() * 0.5
    }));
  }

  function draw() {
    const bg = isLightTheme ? 'rgba(252, 252, 252, 0.15)' : 'rgba(8, 8, 10, 0.15)';
    const head = isLightTheme ? '#00b359' : '#c8ffe0';
    const tail = isLightTheme ? 'rgba(0, 179, 89, 0.55)' : 'rgba(0, 230, 118, 0.55)';

    ctx.fillStyle = bg;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px 'JetBrains Mono', monospace`;

    columns.forEach((col, i) => {
      const x = i * fontSize;
      const y = col.y * fontSize;

      ctx.fillStyle = tail;
      ctx.fillText(pickChar(), x, y);

      ctx.fillStyle = head;
      ctx.fillText(pickChar(), x, y - fontSize);

      col.y += col.speed;
      if (y > canvas.height && Math.random() > 0.975) {
        col.y = 0;
      }
    });
  }

  onMount(() => {
    ctx = canvas.getContext('2d');
    resize();

    const handleResize = () => resize();
    window.addEventListener('resize', handleResize);

    // Throttled to ~20fps: rain reads fine at low frame rate and it keeps
    // this decorative layer cheap next to the AsciiGen/Boids WebGL scenes.
    const animate = (t) => {
      animationFrameId = requestAnimationFrame(animate);
      if (t - lastStep < 50) return;
      lastStep = t;
      draw();
    };
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  });
</script>

<canvas bind:this={canvas} class="matrix-rain-canvas"></canvas>

<style>
  .matrix-rain-canvas {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    opacity: 0.5;
  }
</style>
