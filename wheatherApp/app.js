
const apiKey = '774dcd635b1e472ab1d120340232802';
const serach = document.querySelector('.search')
const count = document.querySelector('.country')
const img = document.querySelector('.img')
const text = document.querySelector('.text')
const wind = document.querySelector('.wind')
const temp = document.querySelector('.temp')
const names = document.querySelector('.name')
const box = document.querySelector('.box-content')


serach.addEventListener('click',() => {
   const city = document.querySelector('.city').value
   fetch(`http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=yes`).then(res => {
      res.json()
      .then(res => { 
         countries = {
            country: res.location.country,
            name: res.location.name,
            temp :res.current.temp_c,
         cloud: res.current.cloud,
         text:res.current.condition.text,
         img:res.current.condition.icon,
         wind:res.current.wind_kph,
      }
     create(countries)
      active()
      })
   })}
   
   )

   function create (x){
         count.innerHTML = x.country
         img.src = x.img
         text.innerHTML = x.text
         wind.innerHTML = x.wind + ' k/h'
         temp.innerHTML = x.temp
         names.innerHTML = x.name
   }

   function active(){
      box.classList.add('active')
   }