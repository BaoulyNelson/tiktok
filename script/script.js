// Sélectionner les liens
const liveStudioLink = document.getElementById('live-studio-link');
const centreLiveLink = document.getElementById('centre-live-link');

// Sélectionner le conteneur de la vidéo
const videoContainer = document.getElementById('video-container');

// Lorsque le lien LIVE Studio est cliqué
liveStudioLink.addEventListener('click', function(e) {
  e.preventDefault(); // Empêcher le comportement par défaut du lien
  // Afficher le conteneur de la vidéo simulée
  videoContainer.style.display = 'block';
  // Modifier la source de la vidéo simulée (ici, mettre le lien de la vidéo souhaitée)
  const videoSource = 'https://www.example.com/simulated-video.mp4';
  const video = videoContainer.querySelector('video');
  video.src = videoSource;
});

// Lorsque le lien Centre LIVE est cliqué
centreLiveLink.addEventListener('click', function(e) {
  e.preventDefault(); // Empêcher le comportement par défaut du lien
  // Afficher le conteneur de la vidéo simulée
  videoContainer.style.display = 'block';
  // Modifier la source de la vidéo simulée (ici, mettre le lien de la vidéo souhaitée)
  const videoSource = 'https://www.example.com/another-simulated-video.mp4';
  const video = videoContainer.querySelector('video');
  video.src = videoSource;
});