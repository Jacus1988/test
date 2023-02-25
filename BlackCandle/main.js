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

let darkMode = JSON.parse(localStorage.getItem('darkMode')) || false;
if(darkMode){
    dark.style.display = 'none';
    light.style.display = 'block';
    body.classList.add('active');
}

switchBtn.addEventListener('click', ()=> {
    if(dark.style.display === 'none'){
        light.style.display = "none"
        dark.style.display = "block"
        body.classList.remove('active')

        darkMode = false;
        localStorage.setItem('darkMode',JSON.stringify(darkMode))
    }
    else{
        dark.style.display = 'none';
        light.style.display = 'block';
        body.classList.add('active')

      darkMode = true;
      localStorage.setItem('darkMode',JSON.stringify(darkMode))
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
     
     const links = document.querySelectorAll('.menu li a')
    const section = document.querySelectorAll('section')

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

    /* ========== SCROLL Up Arrow ================= */
    const arrow = document.querySelector('.arrow-box')

    arrow.addEventListener('click',()=>{
        window.scrollTo(0,0)
    })

    /* ================SCROLL REVEAL================== */

    ScrollReveal().reveal('.about-head,.contact-head' ,{
        delay: 200,
        duration: 700,
        reset:true,
        origin: 'top',
        distance: '100px',
    });

    ScrollReveal().reveal('.container,.contact form' ,{
        delay: 200,
        duration: 700,
        reset:true,
        origin: 'bottom',
        distance: '100px',
    });

  
    
    /* ============== SHOP RENDERING =================== */

    function renderShop (){
        const shopSection = document.querySelector('.shop-products')
        products.forEach((item) => {
            const product = document.createElement('div')
            product.classList.add('item')
            product.innerHTML = `<div id="${item.id}"></div>
            <h3 class="item-title">${item.name}</h3>
            <img src="${item.img}" alt="" class="item-img">
            <p class="item-description">${item.description}</p>
            <div class="item-star">
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star'></i>
                <i class='bx bxs-star-half' ></i>
            </div>
            <p class="item-price">${item.price} ZL</p>
            <button class="item-btn">Dodaj Do Koszyka</button>`
            shopSection.appendChild(product)
        })
        addToBasket()
    }
    
    renderShop()
    
    

    
    
   

    /* ========ADD TO BASKET ============== */

    let productsBuyArray =[];
    const basket = document.querySelector('.basket')

    function addToBasket(){
        const btn = document.querySelectorAll('.item-btn')

        btn.forEach(btn => {
            btn.addEventListener('click',() => {
                const parent = btn.parentElement
                productsBuyArray.push(parent)
                basket.classList.add('active')
                const basketNumber = document.querySelector('.basket-number')
                basketNumber.style.display ="flex"
                basketNumber.innerHTML = productsBuyArray.length
            })
        })
    }

      /* ================== SHOP DISPLAY or NOT ================= */
      const shop = document.querySelector('.shop')
     
      links.forEach(link => {
          const shopLink = link.textContent
          link.addEventListener('click',() => {
          
              if(shopLink === "Shop"){
                  shop.style.display = "flex"
                  basket.classList.add('active')
                 }
                 else{
                  shop.style.display = "none"
                  basket.classList.remove('active')
              }
             })
          })