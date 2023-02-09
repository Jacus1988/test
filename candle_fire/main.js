const hamburger = document.querySelector('.hamburger')
const menuMobile = document.querySelector('.menu-mobile')
const normalMenu = document.querySelector('.normal-menu')

normalMenu.classList.remove('active')
hamburger.classList.remove('active')
menuMobile.classList.remove('active')

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active')
    menuMobile.classList.toggle('active')
    normalMenu.classList.toggle('active')
})

let currentProducts = products;
const mainProducts = document.querySelector('.main-products')

const renderProducts = (items) => {
    mainProducts.innerHTML ="";
    
    for(let i = 0; i < items.length; i++){
        
        const newProduct = document.createElement("div");
        newProduct.classList.add('product-item')
        newProduct.innerHTML = ` <p class="product-name">${items[i].name}</p>
        <img src="${items[i].img}" alt="" class="product-photo">
        <p class="product-description">${items[i].description}</p>
        <p class="product-price">${items[i].price}</p>
        <button>Dodaj do koszyka</button>`;
        
        newProduct.setAttribute("data",items[i].id)
        mainProducts.appendChild(newProduct)
        
    }
}
document.onload = renderProducts(currentProducts)

const searchInput = document.querySelector('.search-input')
const searchMobileInput = document.querySelector('.search-bar-mobile-input')

searchInput.addEventListener('input', (e) => {
    const search = e.target.value

    const foundProduct = currentProducts.filter((product) => {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            return product;
        }
        
    });
    const emptyState = document.querySelector('.empty-state')
    
    foundProduct.length === 0 
    ? emptyState.style.display = 'block'
    : ''

    renderProducts(foundProduct);
})

searchMobileInput.addEventListener('input', (e) => {
    const search = e.target.value

    const foundProduct = currentProducts.filter((product) => {
        if(product.name.toLowerCase().includes(search.toLowerCase())){
            return product;
        }
        
    });
    const emptyState = document.querySelector('.empty-state')
    
    foundProduct.length === 0 
    ? emptyState.style.display = 'block'
    : ''

    renderProducts(foundProduct);
})
