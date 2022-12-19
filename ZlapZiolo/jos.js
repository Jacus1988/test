const kwadraty = document.querySelectorAll(".kwadrat");
const wynik = document.getElementById("wynik");
const czas = document.querySelector("#pozostalyczas");
const thc = document.querySelector(".thc");

const koniec = document.querySelector(".koniec");
let hitpozycja
let result = 0;
let obecnyczas = 15
let czasId = null

function losowykwadrat(){

    kwadraty.forEach(kwadrat => { kwadrat.classList.remove("thc")})

    let losowy = kwadraty[Math.floor(Math.random() * 9)]

    losowy.classList.add("thc")
console.log(losowy)
    
    hitpozycja = losowy.id
}

kwadraty.forEach(kwadrat => {
    kwadrat.addEventListener("mousedown", () => {
        if(kwadrat.id == hitpozycja){
            result++
            wynik.innerHTML = result
            hitpozycja = null
        }
    })
})


function ruchThc(){
    
    czasId = setInterval(losowykwadrat, 500)
}


ruchThc()

function odliczanie(){
    obecnyczas--
    czas.innerHTML=obecnyczas
    if(obecnyczas == 0){
        clearInterval(odliczanieId)
        clearInterval(czasId)
        koniec.style.display ="block"; 
        koniec.innerHTML+= "KONIEC !!! ZŁAPAŁEŚ:" + " " + result + " " + "GRAM";
}}

function reload(){
    location.reload();
}




let odliczanieId = setInterval(odliczanie, 1000)
console.log(losowy)