document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const darkToggle = document.getElementById('toggle-dark');

    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
        hamburger.classList.toggle('toggle');
    });

    darkToggle?.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });
});
