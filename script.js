function switchLanguage(lang) {
    // Hitta alla element med data-lang attribut
    const contentElements = document.querySelectorAll('.content');

    // Gå igenom alla element och justera deras synlighet
    contentElements.forEach(function(element) {
        if (element.getAttribute('data-lang') === lang) {
            element.style.display = 'block';  // Visa rätt språk
        } else {
            element.style.display = 'none';   // Dölj andra språk
        }
    });
}
