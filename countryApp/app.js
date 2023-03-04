const url = 'https://restcountries.com/v3.1/all';
let country 
const box = document.querySelector('.box-container')
const serachInput = document.querySelector('.search')
let countryFilter

fetch(url)
  .then(res => res.json())
  .then(countries => {
    country = countries.map(country => {
        return {
            capital : country.capital && country.capital[0],
            name : country.name.common,
            continent: country.region ,
            flag : country.flags.png,
            population: country.population.toLocaleString(),
        }
      })
      renderCoutry(country)
    })
    
  function renderCoutry(country){
    clearBox()
    country.forEach(element => {
      const countryElm = document.createElement('div')
      countryElm.classList.add('item')
      countryElm.innerHTML = ` <img src="${element.flag}" alt="" class="flag">
      <h1 class="title">${element.name}</h1>
      <span class="region">Kontynent: ${element.continent}</span>
      <span class="capital">Stolica: ${element.capital}</span>
      <span class="population">Populacja: ${element.population}</span>`
      box.appendChild(countryElm)
    })};
      
    function clearBox() {
      box.innerHTML = ''
    }

    serachInput.addEventListener('input',(e)=> {
      const searchCountry = e.target.value.toLowerCase().trim()
      countryFilter = country.filter((x) => 
        x.name.toLowerCase().includes(searchCountry)
       )
      
        console.log(countryFilter);
       renderCoutry(countryFilter)
      })
