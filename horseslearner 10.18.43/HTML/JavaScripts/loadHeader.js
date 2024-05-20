function loadHeader(pathRelativeToRoot) {
    // Calculer le chemin complet du header en combinant le chemin relatif spécifié avec le nom du fichier header
    const headerPath = pathRelativeToRoot + 'header.html';

    fetch(headerPath)
        .then(response => response.text())
        .then(data => {
            // Charger le contenu du header
            document.getElementById('header-placeholder').innerHTML = data;

            // Mettre à jour les liens du menu avec le chemin relatif spécifié
            const menuLinks = document.querySelectorAll('#header-placeholder nav ul li a');
            menuLinks.forEach(link => {
                const href = link.getAttribute('href');

            });

            // Afficher un message dans la console pour indiquer que le header est chargé
            console.log('Header chargé avec succès.');
            console.log(menuLinks);
        })
        .catch(error => console.error('Error loading header:', error));
}