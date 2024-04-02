document.addEventListener('DOMContentLoaded', () => {
    const themeMode = localStorage.getItem('themeMode')

    if (themeMode === null || themeMode === '' || themeMode === undefined) {
        localStorage.setItem('themeMode', 'darkMode')
    }

    themeMode === 'whiteMode' ? applyLightTheme() : ""
})

document.getElementById('themeToggle').addEventListener('click', () => {
    const themeMode = localStorage.getItem('themeMode')

    themeMode === 'darkMode' ? applyLightTheme() : applyDarkTheme()
})

function applyLightTheme() {
    document.getElementById('box').classList.add('box-checked')
    document.getElementById('label').classList.add('label-checked')

    document.querySelector('body').classList.remove('dark-bg')
    document.querySelector('body').classList.add('light-bg')

    // here the only differente is on dark mode not has this class
    document.getElementById('header-sm-text').classList.add('light-bg-header-sm')

    document.getElementById('header-lg-text').classList.remove('text-white')
    document.getElementById('header-lg-text').classList.add('text-black')

    document.getElementById('icons-social').classList.remove('dark-shadow-icons-social')
    document.getElementById('icons-social').classList.add('light-shadow-icons-social')

    document.getElementById('container-photo').classList.remove('black-bg-conteiner-photo')
    document.getElementById('container-photo').classList.add('light-bg-conteiner-photo')

    document.getElementById('bio-about-me').classList.remove('dark-border-bio-about-me')
    document.getElementById('bio-about-me').classList.add('light-border-bio-about-me')

    document.getElementById('abilities-container').classList.remove('text-white')
    document.getElementById('abilities-container').classList.add('text-black')

    const sectionTitles = document.getElementsByClassName('section-title')
    Array.from(sectionTitles).forEach(element => {
        element.classList.remove('text-white')
        element.classList.add('text-black')
    })

    const articlesTitle = document.getElementsByClassName('articles-title')
    Array.from(articlesTitle).forEach(element => {
        element.classList.remove('dark-bg-article-h3')
        element.classList.add('light-bg-article-h3')
    })

    const articlesText = document.getElementsByClassName('articles-text')
    Array.from(articlesText).forEach(element => {
        element.classList.remove('dark-bg-article-p')
        element.classList.add('text-black')
    })

    const repoButtons = document.getElementsByClassName('project-repo')
    Array.from(repoButtons).forEach(element => {
        element.classList.add('light-bg-article-repo')
    })

    const contactLabels = document.getElementsByClassName('contact-label')
    Array.from(contactLabels).forEach(element => {
        element.classList.add('text-black')
        element.classList.remove('text-white')
    })

    localStorage.setItem('themeMode', 'whiteMode')
}

function applyDarkTheme() {
    document.getElementById('box').classList.remove('box-checked')
    document.getElementById('label').classList.remove('label-checked')

    document.querySelector('body').classList.add('dark-bg')
    document.querySelector('body').classList.remove('light-bg')

    // here the only differente is on dark mode not has this class
    document.getElementById('header-sm-text').classList.remove('light-bg-header-sm')

    document.getElementById('header-lg-text').classList.add('text-white')
    document.getElementById('header-lg-text').classList.remove('text-black')

    document.getElementById('icons-social').classList.add('dark-shadow-icons-social')
    document.getElementById('icons-social').classList.remove('light-shadow-icons-social')

    document.getElementById('container-photo').classList.add('black-bg-conteiner-photo')
    document.getElementById('container-photo').classList.remove('light-bg-conteiner-photo')

    document.getElementById('bio-about-me').classList.add('dark-border-bio-about-me')
    document.getElementById('bio-about-me').classList.remove('light-border-bio-about-me')

    document.getElementById('abilities-container').classList.add('text-white')
    document.getElementById('abilities-container').classList.remove('text-black')

    const sectionTitles = document.getElementsByClassName('section-title')
    Array.from(sectionTitles).forEach(element => {
        element.classList.add('text-white')
        element.classList.remove('text-black')
    })

    const articlesTitle = document.getElementsByClassName('articles-title')
    Array.from(articlesTitle).forEach(element => {
        element.classList.add('dark-bg-article-h3')
        element.classList.remove('light-bg-article-h3')
    })

    const articlesText = document.getElementsByClassName('articles-text')
    Array.from(articlesText).forEach(element => {
        element.classList.add('dark-bg-article-p')
        element.classList.remove('text-black')
    })

    const repoButtons = document.getElementsByClassName('project-repo')
    Array.from(repoButtons).forEach(element => {
        element.classList.remove('light-bg-article-repo')
    })

    const contactLabels = document.getElementsByClassName('contact-label')
    Array.from(contactLabels).forEach(element => {
        element.classList.remove('text-black')
        element.classList.add('text-white')
    })

    localStorage.setItem('themeMode', 'darkMode')
}

window.onscroll = function () {

    if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450) {
        document.getElementById("turn-back-top").classList.add('turn-back-top-on')
        document.getElementById("turn-back-top").classList.remove('turn-back-top-off')
    } else {
        document.getElementById("turn-back-top").classList.remove('turn-back-top-on')
        document.getElementById("turn-back-top").classList.add('turn-back-top-off')
    }

    const turnBackButton = document.getElementById('turn-back-top');
    const footer = document.getElementById('footer');

    let turnBackButtonTop = turnBackButton.getBoundingClientRect().top;
    let footerTop = footer.getBoundingClientRect().top;
    let distance = footerTop - (turnBackButtonTop + turnBackButton.offsetHeight);

    if (distance < 30) {
        document.getElementById('turn-back-top').classList.add('turn-back-top-margin')
    } else {
        document.getElementById('turn-back-top').classList.remove('turn-back-top-margin')
    }
}





