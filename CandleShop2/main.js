const navHome = document.querySelector('.nav-home')
const navAbout = document.querySelector('.nav-user')
const navShop = document.querySelector('.nav-shop')
const navContact = document.querySelector('.nav-mail')

const section =document.querySelector('.section')

const sec1 = document.querySelector('.sec1')
const sec2 = document.querySelector('.sec2')
const sec3 = document.querySelector('.sec3')
const sec4 = document.querySelector('.sec4')

navHome.addEventListener('click', switchPage)
navAbout.addEventListener('click',switchPage)
navShop.addEventListener('click',switchPage)
navContact.addEventListener('click',switchPage)

function switchPage(e){
    
    sec1.classList.remove('active')
    sec2.classList.remove('active')
    sec3.classList.remove('active')
    sec4.classList.remove('active')
    
    navHome.classList.remove('active')
    navAbout.classList.remove('active')
    navShop.classList.remove('active')
    navContact.classList.remove('active')

    if(e.target === navHome){
    sec1.classList.add('active')
    navHome.classList.add('active')
    }
    else if(e.target === navAbout){
        sec2.classList.add('active')
        navAbout.classList.add('active')
    }
    else if(e.target === navShop){
        sec3.classList.add('active')
        navShop.classList.add('active')
    }
    else if(e.target === navContact){
        sec4.classList.add('active')
        navContact.classList.add('active')
    }
}