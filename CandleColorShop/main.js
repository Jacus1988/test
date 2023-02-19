const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click',() => {
    hamburger.classList.toggle('active')
    const list = document.querySelector('ul')
    list.classList.toggle('active')
})

const nav = document.querySelector('.navigation')

window.addEventListener('scroll', () => {
    if(window.scrollY > 350){
        nav.classList.add('scroll')
    }
    else{
        nav.classList.remove('scroll')
    }
})

const menu = document.querySelectorAll('ul li a')

menu.forEach((item) => {
    item.addEventListener('click', (e) => {

      let targetItem = e.target;
      menu.forEach(item => {
        item.classList.remove('active');
      });
      targetItem.classList.add('active'); 
    });   
  });

 const stars = document.querySelectorAll('.stars i')

const colorArray = ["red", "blue","green","yellow","gold","gray","pink","lightblue","lightgreen","crimson","orange","violet","aqua","aquamarine","brown","coral"];

function changeColors(){
  stars.forEach((star) => {
      const randomIndex = Math.floor(Math.random() * colorArray.length);
      const randomColor = colorArray[randomIndex];
      star.style.color = randomColor
    })
  }
  setInterval(changeColors,1000)
  
  function changePhotoColor(){
    const userPhoto = document.querySelector('.user-photo')
    const random = Math.floor(Math.random() * colorArray.length)
    userPhoto.style.border = '3px solid ' + colorArray[random]
}
  setInterval(changePhotoColor,1000)
  
  const productsArray = products
  let shopProductsArray = [];

function renderProducts(){
    productsArray.forEach((item) => {
      const product = document.createElement('div')
      product.classList.add('item')
      product.innerHTML = `<p class="item-tittle">${item.name}</p>
      <img src="${item.img}" alt="" class="item-img">
      <p class="item-description">${item.description}</p>
      <p class="item-price">${item.price}</p>
      <button class="item-btn">Dodaj do Koszyka</button>`
      
      const productsSection = document.querySelector('.products')
      productsSection.appendChild(product)
    })
  }
  renderProducts()
  let basketNumber = document.querySelector('.basket-number')
  
  const btn = document.querySelectorAll('.item-btn')
  btn.forEach((btn) => {
    btn.addEventListener('click',(e) => {
      const target = e.target.parentElement
      shopProductsArray.push(target)
      basketNumber.innerHTML = shopProductsArray.length
      basketNumber.style.display = 'flex'
      
      const name = target.querySelector('.item-tittle').textContent
      const price = parseInt(target.querySelector('.item-price').textContent);
      const image = target.querySelector('.item-img').getAttribute('src');
      
      const shopItem = document.createElement('div')
      shopItem.classList.add('shop-item')
      shopItem.setAttribute('data-price',price)
      shopItem.innerHTML = `<img src="${image}" alt="" class="shop-item-img">
      <div class="shop-item-name">${name}</div>
      <div class="shop-item-price" data-price="${price}">${price}zł</div>
      <button class="del-btn"><img src="../svg/icons8-trash-64.png"></button>`

      const tottalInner = document.querySelector('.tottal')
      tottalInner.innerHTML = parseInt(tottalInner.innerHTML || 0 ) + price + "zł"
      
      const shopCartItem = document.querySelector('.shop-cart-items')
      shopCartItem.appendChild(shopItem)
      basketNumber.innerHTML = shopCartItem.children.length
      
      shopItem.addEventListener('click', (e) => {
        const parent = e.target.parentElement.parentElement
        tottalInner.innerHTML = parseInt(tottalInner.innerHTML) -  parent.getAttribute('data-price') + "zł"
        parent.remove()
        basketNumber.innerHTML = shopCartItem.children.length
      }) 
      
     
      const basketShopIcon = document.querySelector('.basket-shop')
      basketShopIcon.addEventListener('click', () => {
        const shopCart = document.querySelector('.shop-cart')
        shopCart.style.display = 'flex'
        window.scrollTo(0, 0)
        const exitBtn = document.querySelector('.exit-btn')
        exitBtn.addEventListener('click',()=>{
          shopCart.style.display = 'none'

        })
      })
})
})


 

    