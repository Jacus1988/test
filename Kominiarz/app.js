const hamburger = document.querySelector('.hamburger')
const header = document.querySelector('header')


hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active')
    const mobileMenu = document.querySelector('.mobile-menu')
    mobileMenu.classList.toggle('active')
    if(hamburger.classList.contains('active')){
        header.style.boxShadow = "none"
    }else{
        header.style.boxShadow = '5px 5px 10px black';
    }
})