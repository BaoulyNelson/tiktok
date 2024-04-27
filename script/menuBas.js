// Sélectionner les éléments nécessaires
const sidebar = document.getElementById('sidebar');
const homeLink = document.querySelector('.bottom-menu .menu-item:first-child');

// Ajouter un écouteur d'événements au lien "Accueil"
homeLink.addEventListener('click', () => {
  if (sidebar.classList.contains('show')) {
    sidebar.classList.remove('show'); // Fermer le panneau latéral si déjà ouvert
  } else {
    sidebar.classList.add('show'); // Ouvrir le panneau latéral si fermé
  }
});
