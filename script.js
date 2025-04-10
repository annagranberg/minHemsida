
document.addEventListener("DOMContentLoaded", function () {
    const portfolioBtn = document.querySelector('.otherPages button'); // justera om du har flera
    const overlay = document.querySelector('.full-grey-overlay');
    const left = document.querySelector('.left-section');
    const right = document.querySelector('.right-section');

    portfolioBtn.addEventListener('click', () => {
        // Ta bort sektionerna från sidan
        left.style.display = 'none';
        right.style.display = 'none';

        // Visa helgrå overlay
        overlay.classList.add('active');

        // (Valfritt) Vänta lite innan man går till en ny sida
        setTimeout(() => {
            // Ladda portfolion, eller visa annat innehåll här
            window.location.href = 'Portfolio.html'; // Byt ut till rätt URL
        }, 800); // Matcha med din CSS-transition
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

document.querySelectorAll('.hidden').forEach((el) => observer.observe(el));