// Sélectionner les éléments nécessaires
const menuToggle = document.getElementById('menu-toggle');
const sidebar = document.getElementById('sidebar');

// Ajouter un écouteur d'événements au bouton de menu
menuToggle.addEventListener('click', () => {
  sidebar.classList.toggle('show'); // Basculer la classe "show" sur le panneau latéral
  // Changer l'icône du bouton de menu en fonction de l'état du panneau latéral
  if (sidebar.classList.contains('show')) {
    menuToggle.innerHTML = '<i class="fas fa-times"></i>'; // Utiliser l'icône de fermeture
  } else {
    menuToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Utiliser l'icône de menu
  }
});

