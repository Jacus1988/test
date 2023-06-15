const hamburger = document.querySelector('.hamburger')



hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active')
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('active')
})