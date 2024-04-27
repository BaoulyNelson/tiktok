// Sélection de l'élément de déconnexion
const logoutLink = document.getElementById('logout');
// Sélection des options de confirmation
const confirmationOptions = document.querySelector('.confirmation-options');
const confirmYesRadio = document.getElementById('confirm-yes');
const confirmNoRadio = document.getElementById('confirm-no');
const confirmButton = document.getElementById('confirm-button');

// Ajout d'un écouteur d'événements de clic sur le lien de déconnexion
logoutLink.addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le comportement par défaut du lien (redirection)

    // Afficher les options de confirmation
    confirmationOptions.style.display = 'block';
});

// Ajout d'un écouteur d'événements de clic sur le bouton de confirmation
confirmButton.addEventListener('click', function() {
    // Vérifier si l'utilisateur a sélectionné "Oui" pour confirmer la déconnexion
    if (confirmYesRadio.checked) {
        // Afficher une alerte pour confirmer la déconnexion
        alert('Vous avez choisi de vous déconnecter.');
    } else if (confirmNoRadio.checked) {
        // Afficher une alerte pour annuler la déconnexion
        alert('Vous avez annulé la déconnexion.');
    }

    // Cacher les options de confirmation
    confirmationOptions.style.display = 'none';
});
