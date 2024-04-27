function filterLinks() {
  var query = document.getElementById('query').value.toLowerCase(); // Récupérer la valeur de la recherche en minuscules
  var links = document.querySelectorAll('.bottom-menu .menu-item, .sidebar-item'); // Sélectionner tous les liens à filtrer

  var count = 0; // Initialiser le compteur de liens trouvés

  links.forEach(function(link) {
      var linkText = link.textContent.toLowerCase(); // Récupérer le texte du lien en minuscules
      if (linkText.includes(query)) { // Vérifier si le texte du lien contient la recherche
          link.style.display = 'block'; // Afficher le lien
          count++; // Incrémenter le compteur de liens trouvés
      } else {
          link.style.display = 'none'; // Masquer le lien s'il ne correspond pas à la recherche
      }
  });

  var message = document.getElementById('message');
    if (query !== '') { // Vérifier si le champ de recherche n'est pas vide
        message.textContent = 'Nombre de liens trouvés : ' + count; // Afficher le nombre de liens trouvés
    } else {
        message.textContent = ''; // Effacer le message si le champ de recherche est vide
    }
}

document.getElementById('search-icon').addEventListener('click', function() {
  var searchForm = document.getElementById('form');
  if (searchForm.style.display === 'none' || searchForm.style.display === '') {
      searchForm.style.display = 'block';
  } else {
      searchForm.style.display = 'none';
  }
});

