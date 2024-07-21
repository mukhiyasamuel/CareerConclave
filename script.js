document.getElementById('yes-button').addEventListener('click', function() {
  document.getElementById('video-container').classList.remove('hidden');
});

const noButton = document.getElementById('no-button');
noButton.addEventListener('mouseover', function() {
  if (!noButton.classList.contains('unmovable')) {
      const offsetX = Math.random() * 200 - 100;
      const offsetY = Math.random() * 200 - 100;
      noButton.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }
});

noButton.addEventListener('click', function(event) {
  event.preventDefault();
  noButton.classList.add('unmovable');
});