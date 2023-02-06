const menu = document.querySelector(".hamburger")
const section = document.querySelector('.section-menu')
const mobile = document.querySelector('.hamburger-mobile')


section.classList.remove('active')
menu.classList.remove('active')
mobile.classList.remove('active')

menu.addEventListener('click',() => {
    menu.classList.toggle('active')
    section.classList.toggle('active')
})

mobile.addEventListener('click',() => {
    mobile.classList.toggle('active')
    section.classList.toggle('active')
})