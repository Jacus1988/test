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
      <button class="item-btn">Dodaj do koszyka</button>`
      
      const productsSection = document.querySelector('.products')
      productsSection.appendChild(product)
    })
    const btn = document.querySelectorAll('.item-btn')
    btn.forEach((btn) => {
      btn.addEventListener('click',(e) => {
        const target = e.target
        shopProductsArray.push(target)
        console.log(shopProductsArray);
      })
    })
}


renderProducts()