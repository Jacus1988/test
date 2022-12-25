const grid = document.querySelector('.grid')
const kwadraty = document.querySelectorAll('.kwadrat')
const thc = document.querySelector('.thc')
const wynik = document.querySelector('.result')
const czas = document.querySelector('.time')
const btn = document.querySelector('.btn')
const end = document.querySelector('.end')
const text = document.querySelector('.text')
let hit
let result = 0
let czasId = null
let timer = 15

function losowanie(){
    kwadraty.forEach(item =>{item.classList.remove('thc')})

    let losowy = kwadraty[Math.floor(Math.random()*9)]

    losowy.classList.add('thc')

     hit = losowy.id
}

kwadraty.forEach(kwadrat => {
    kwadrat.addEventListener('mousedown', () => {
        if(kwadrat.id == hit){
            result++
            wynik.innerHTML = result
            hit = null
            console.log(kwadrat.id);
        }
    })
})


function ruchThc(){
 czasId = setInterval(losowanie, 500)
}

ruchThc()

function odliczanie(){
    timer--
    czas.innerHTML = timer
    if(timer === 0){
        clearInterval(odliczanieId)
        clearInterval(czasId)
        end.style.display = 'block'
        text.innerHTML += "KONIEC !!! ZŁAPAŁEŚ:" + " " + result + " " + "GRAM";
    }
    
}
btn.addEventListener('click', () => {
    location.reload()
})

let odliczanieId = setInterval(odliczanie,1000)