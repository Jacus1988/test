const navHome = document.querySelector('.nav-home')
const navAbout = document.querySelector('.nav-user')
const navShop = document.querySelector('.nav-shop')
const navContact = document.querySelector('.nav-mail')

const section =document.querySelector('.section')
const basketShoping = document.querySelector('.basket-shoping')

const sec1 = document.querySelector('.sec1')
const sec2 = document.querySelector('.sec2')
const sec3 = document.querySelector('.sec3')
const sec4 = document.querySelector('.sec4')

navHome.addEventListener('click', switchPage)
navAbout.addEventListener('click',switchPage)
navShop.addEventListener('click',switchPage)
navContact.addEventListener('click',switchPage)

function switchPage(e){
    
    basketShoping.classList.remove('active')

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
    sec1.scrollIntoView({behavior:"smooth"})
    navHome.classList.add('active')
    }
    else if(e.target === navAbout){
        sec2.classList.add('active')
        sec2.scrollIntoView({behavior:"smooth"})
        navAbout.classList.add('active')
    }
    else if(e.target === navShop){
        sec3.classList.add('active')
        sec3.scrollIntoView({behavior:"smooth"})
        navShop.classList.add('active')
        basketShoping.classList.add('active')
    }
    else if(e.target === navContact){
        sec4.classList.add('active')
        sec4.scrollIntoView({behavior:"smooth"})
        navContact.classList.add('active')
    }
}

const productsArray = products;


function renderProducts(){
    const productsSection = document.querySelector('.products')
    const basketNumber = document.querySelector('.basket-number')

    productsArray.forEach((item) => {
        const product = document.createElement('div')
        product.classList.add('item')
        product.innerHTML = `<p class="item-tittle">${item.name}</p>
        <img class="item-img" src="${item.img}" alt="">
        <p class="item-description">${item.description}</p>
        <div class="item-down">
            <p class="item-price">${item.price}</p>
            <button class="item-btn">Dodaj do koszyka</button> 
        </div>`

        productsSection.appendChild(product)
    })
}

renderProducts()

    let tottalArray = [];

    const addToBasket = (e) => {
        const basketNumber = document.querySelector('.basket-number')

        const item = e.target.parentElement
        tottalArray.push(item)
        basketNumber.innerHTML = tottalArray.length
        basketNumber.style.display = 'flex'
        console.log(item);
    }

    const itemBtn = document.querySelectorAll('.item-btn')

    itemBtn.forEach((btn) => {
        btn.addEventListener('click', addToBasket)
    })
