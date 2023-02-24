/* ======= HAMBURGER ============= */

const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active')
    const list = document.querySelector('.menu')
    list.classList.toggle('active')

    list.addEventListener('click',() => {
        list.classList.remove('active')
        hamburger.classList.remove('active')
    })
})

/* ========= NAVIGATION SCROLL ============= */

const nav = document.querySelector('nav')

window.addEventListener('scroll', () => {
    if(window.scrollY>150){
        nav.style.transition = "all 1s"
        nav.style.boxShadow = " 0 0 10px 5px black"
    }
    else{
        nav.style.boxShadow = "none"
    }
})

/* =========== SWITCH DARK MODE ============= */

const switchBtn = document.querySelector('.switch-light')
const dark = document.querySelector('.bxs-moon')
const light = document.querySelector('.bxs-sun')
const body = document.querySelector('body')
switchBtn.addEventListener('click', ()=> {
    
    
    if(dark.style.display === 'none'){
        light.style.display = "none"
        dark.style.display = "block"
        body.classList.remove('active')
    }else{
        dark.style.display = 'none';
        light.style.display = 'block';
        body.classList.add('active')
    }
})

/* =========== TYPED JS ================ */



var options = {
    strings: ['Truskawkowe', 'Czekoladowe','Kawowe','Mleczne'],
    typeSpeed: 100,
    backSpeed:100,
    loop:true,
    showCursor: false,
};
    
  
  var typed = new Typed('.sprzedajemy', options);

    /* ============ SECTION SELECTOR ============== */

    const section = document.querySelectorAll('section')
    const links = document.querySelectorAll('.menu li a')

    window.onscroll = () => {
        section.forEach((sec) => {
            let top = window.scrollY
            let offset = sec.offsetTop - 100
            let height = sec.offsetHeight
            let id = sec.getAttribute('id')

            if(top >= offset && top < offset + height){
                links.forEach(link => {
                    link.classList.remove('active')
                    document.querySelector('.menu li a[href*=' + id + ']').classList.add('active')
                })
            }
        })
    }