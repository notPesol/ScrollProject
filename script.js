// set year
const date = document.querySelector('#date');
date.textContent = new Date().getFullYear();

// close links
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', () => {
    // linksContainer.classList.toggle('show-links');
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    if (containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = 0;
    }
});

// fixed navbar
const navbar = document.querySelector('#nav');
const topLink = document.querySelector('.top-link');
window.addEventListener('scroll', (e) => {
    const scrollHeight = window.pageYOffset;
    const navbarHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navbarHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }
    if (scrollHeight > 1000) {
        topLink.classList.add('show-link');
    } else {
        topLink.classList.remove('show-link');
    }

});

// smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        

        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        console.log(containerHeight);
        const isFixedNav = navbar.classList.contains('fixed-nav');
        let position = element.offsetTop - navHeight;
        if(isFixedNav){
            position = position - navHeight;
        }
        if(navHeight > 82){
            position = position + containerHeight;
        }
        window.scrollTo({
            left: 0,
            top: position
        });
        linksContainer.style.height = 0;
    });
})