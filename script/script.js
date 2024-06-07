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

const darkLight = document.querySelector("#darkLight");
const body = document.querySelector("body");


darkLight.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    document.setI
    darkLight.classList.replace("bx-sun", "bx-moon");
  } else {
    darkLight.classList.replace("bx-moon", "bx-sun");
  }
});


document.addEventListener("DOMContentLoaded", function() {
  const navbar = document.querySelector('.navbar');
  const items = navbar.children.length;

  // Ajuste le padding en fonction du nombre d'éléments
  const padding = Math.max(1, 5 - items) + 'vw';
  navbar.style.padding = `${padding} 3vw`;
});


// var lastScrollTop = 0;

// window.addEventListener("scroll", function () {
//     var currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//     if (currentScroll > lastScrollTop) {
//         // Scroll vers le bas
//         document.querySelector('.bottom-menu').style.transform = 'translateY(100%)';
//     } else {
//         // Scroll vers le haut
//         document.querySelector('.bottom-menu').style.transform = 'translateY(0)';
//     }

//     lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Pour prendre en compte le défilement vers le haut
// }, false);

