const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')

hamburger.classList.remove('active')
mobileMenu.classList.remove('active')

hamburger.addEventListener('click',() => {
    
    hamburger.classList.toggle('active')
    mobileMenu.classList.toggle('active')
})
console.log(mobileMenu);