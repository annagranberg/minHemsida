function switchLanguage(lang) {
    if (lang === 'sv') {
        document.getElementById('left-sv').style.display = 'block';
        document.getElementById('right-sv').style.display = 'block';
        document.getElementById('left-en').style.display = 'none';
        document.getElementById('right-en').style.display = 'none';
    } else if (lang === 'en') {
        document.getElementById('left-sv').style.display = 'none';
        document.getElementById('right-sv').style.display = 'none';
        document.getElementById('left-en').style.display = 'block';
        document.getElementById('right-en').style.display = 'block';
    }
}
