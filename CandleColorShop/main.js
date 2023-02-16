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
        e.preventDefault()
        let targetItem = e.target
        menu.forEach(item => {
            item.classList.remove('active')
        })

        targetItem = item.classList.add('active')
    })
})