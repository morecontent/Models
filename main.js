// main.js
document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const CHUNK = 8;
  let shown = 0;

  function renderCards(slice) {
    slice.forEach(({ name, image, link }) => {
      const a = document.createElement('a');
      a.href = link;
      a.target = "_blank";
      a.className = 'card';
      a.innerHTML = `
        <img src="${image}" alt="${name}" loading="lazy">
        <div class="card-body"><h3>${name}</h3></div>`;
      gallery.appendChild(a);
    });
  }

  function loadNextChunk() {
    const next = models.slice(shown, shown + CHUNK);
    renderCards(next);
    shown += CHUNK;
    if (shown >= models.length) loadMoreBtn.style.display = 'none';
  }

  loadMoreBtn.addEventListener('click', loadNextChunk);
  loadNextChunk(); // initial load
});
