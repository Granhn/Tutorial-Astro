const d = document;
d.querySelector('.hamburger').addEventListener('click', () => {
    d.querySelector('.nav-links').classList.toggle('expanded');
});