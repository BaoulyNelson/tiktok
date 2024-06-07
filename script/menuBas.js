// Sélectionner les éléments nécessaires
const sidebar = document.getElementById('sidebar');
const homeLink = document.querySelector('.bottom-menu .menu-item:first-child');
const homeIcon = homeLink.querySelector('i');

// Ajouter un écouteur d'événements au lien "Accueil"
homeLink.addEventListener('click', () => {
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show'); // Fermer le panneau latéral si déjà ouvert
    homeIcon.classList.remove('fa-times'); // Enlever l'icône "fermer"
    homeIcon.classList.add('fa-home'); // Ajouter l'icône "home"
  } else {
    sidebar.classList.add('show'); // Ouvrir le panneau latéral si fermé
    homeIcon.classList.remove('fa-home'); // Enlever l'icône "home"
    homeIcon.classList.add('fa-times'); // Ajouter l'icône "fermer"
  }
});