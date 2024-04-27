function translate(lang) {
    if (lang === 'fr') {
        document.getElementById('content').innerHTML = `
            <h1>Bienvenue</h1>
            <p>Ceci est un exemple de simulation de traduction. Sélectionnez une langue dans la barre latérale pour voir la traduction.</p>
        `;
    } else if (lang === 'en') {
        document.getElementById('content').innerHTML = `
            <h1>Welcome</h1>
            <p>This is an example of translation simulation. Select a language from the sidebar to see the translation.</p>
        `;
    }
    // Ajoutez des conditions pour d'autres langues si nécessaire
}