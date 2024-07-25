function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', () => {
    const aboutButton = document.querySelector('.about-button');
    const newSection = document.querySelector('.new-section');
    const aboutButtonOffset = aboutButton.getBoundingClientRect().top + window.scrollY;
    const scrollPosition = window.scrollY + window.innerHeight;
    
    if (scrollPosition > aboutButtonOffset + 200) {  
        newSection.classList.add('visible');
    } else {
        newSection.classList.remove('visible');
    }
});
