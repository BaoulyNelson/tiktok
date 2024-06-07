<?php
// Fichier pour stocker le nombre de visites
$file = 'count.txt';

// Vérifier si le fichier existe, sinon le créer et initialiser le compteur à 0
if (!file_exists($file)) {
    file_put_contents($file, '0');
}

// Lire le nombre de visites actuel
$count = file_get_contents($file);

// Augmenter le compteur de 1
$count++;

// Écrire le nouveau nombre de visites dans le fichier
file_put_contents($file, $count);

// Afficher le nombre de visites
echo "Nombre de visiteurs : " . $count;
?>
