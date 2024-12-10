document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navUser = document.querySelector('.nav-user');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        navUser.classList.toggle('active');
    });
});
