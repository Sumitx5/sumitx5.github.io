//Functions
const observerOptions = {
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
}, observerOptions);

document.querySelectorAll('.card').forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "all 0.8s ease-out";
    observer.observe(card);
});

// Navbar blur on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = "rgba(8, 8, 8, 0.95)";
        nav.style.padding = "1rem 8%";
    } else {
        nav.style.background = "rgba(8, 8, 8, 0.8)";
        nav.style.padding = "1.5rem 8%";
    }
});