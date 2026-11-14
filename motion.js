(() => {
  const videos = Array.from(document.querySelectorAll('video'));
  const buttons = Array.from(document.querySelectorAll('[data-motion-toggle]'));
  if (!videos.length || !buttons.length) return;

  const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const key = 'portfolio-motion';
  const visible = new Set();
  const pausedByViewer = new Set();
  let choice = null;
  try { choice = sessionStorage.getItem(key); } catch {}
  let enabled = choice === null ? !preference.matches : choice === 'play';

  function sync(video) {
    if (document.hidden || !visible.has(video) || !enabled) {
      video.pause();
    } else if (!pausedByViewer.has(video) && video.paused) {
      // A browser may reserve playback for an explicit gesture.
      video.play().catch(() => {});
    }
  }

  function updateButton() {
    for (const button of buttons) {
      button.textContent = enabled ? 'Pause motion' : 'Play motion';
      button.hidden = false;
    }
  }

  const observer = new IntersectionObserver(entries => {
    for (const entry of entries) {
      const video = entry.target;
      if (entry.isIntersecting && entry.intersectionRatio >= 0.1) visible.add(video);
      else visible.delete(video);
      sync(video);
    }
  }, { threshold: [0, 0.1] });

  for (const video of videos) {
    video.muted = true;
    video.addEventListener('pause', () => {
      if (video.paused && enabled && !document.hidden && visible.has(video)) {
        pausedByViewer.add(video);
      }
    });
    video.addEventListener('play', () => pausedByViewer.delete(video));
    observer.observe(video);
  }

  function toggleMotion() {
    enabled = !enabled;
    choice = enabled ? 'play' : 'pause';
    try { sessionStorage.setItem(key, choice); } catch {}
    pausedByViewer.clear();
    videos.forEach(sync);
    updateButton();
  }
  buttons.forEach(button => button.addEventListener('click', toggleMotion));

  preference.addEventListener('change', () => {
    if (choice !== null) return;
    enabled = !preference.matches;
    videos.forEach(sync);
    updateButton();
  });
  document.addEventListener('visibilitychange', () => videos.forEach(sync));
  updateButton();
})();
