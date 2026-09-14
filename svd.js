(() => {
  'use strict';
  const get = (id) => document.getElementById(id);
  const choice = get('painting-choice');
  const slider = get('rank-slider');
  const status = get('demo-status');
  const original = get('original-image');
  const reconstructed = get('reconstructed-image');
  let data;
  let renderVersion = 0;
  const percent = (value) => `${(Math.min(1, Math.max(0, value)) * 100).toFixed(2)}%`;
  const preload = (url) => new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = url;
  });
  async function render() {
    const version = ++renderVersion;
    const example = data.examples.find((item) => item.id === choice.value);
    const frame = example.frames[Number(slider.value)];
    get('rank-value').value = String(frame.rank);
    slider.setAttribute('aria-valuetext', `${frame.rank} singular components`);
    status.textContent = `Loading rank-${frame.rank} reconstruction…`;
    try {
      await Promise.all([preload(example.original), preload(frame.file)]);
      if (version !== renderVersion) return;
      original.src = example.original;
      original.alt = `${example.artist}, ${example.title}: original grayscale input`;
      reconstructed.src = frame.file;
      reconstructed.alt = `${example.artist}, ${example.title}: reconstruction using ${frame.rank} singular components`;
      get('reconstruction-caption').textContent = `Rank-${frame.rank} reconstruction`;
      get('energy-value').textContent = percent(frame.totalEnergy);
      get('residual-value').textContent = percent(frame.residualEnergy);
      get('error-value').textContent = frame.relativeError < 0.0001 ? '<0.01%' : percent(frame.relativeError);
      const source = get('painting-source');
      source.href = example.source;
      source.textContent = `${example.artist} — ${example.title}`;
      status.textContent = '';
    } catch (_) {
      if (version !== renderVersion) return;
      status.textContent = 'This image could not load. Try another rank or painting.';
    }
  }
  async function start() {
    try {
      const response = await fetch('./assets/svd-demo/data.json');
      if (!response.ok) throw new Error('Data unavailable');
      data = await response.json();
      choice.disabled = false;
      slider.disabled = false;
      choice.addEventListener('change', render);
      slider.addEventListener('input', render);
      await render();
    } catch (_) {
      status.textContent = 'The interactive data could not load. The example above remains available; refresh to retry.';
    }
  }
  start();
})();
