const url = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Clitecoin%2Cdogecoin&vs_currencies=usd';

fetch(url)
.then(res => res.json()
.then(coin => { 
    
    const bitcoin = coin.bitcoin.usd
    const etherum = coin.ethereum.usd
    const litecoin = coin.litecoin.usd
    const dogecoin = coin.dogecoin.usd
     
    const btnBitcoin = document.querySelector('.bitcoin').addEventListener('click',() => {
        results(bitcoin)
    });
    const btnEtherum = document.querySelector('.ethereum').addEventListener('click',() => {
        results(etherum)
    });
    const btnLitecoin = document.querySelector('.litecoin').addEventListener('click', () => {
        results(litecoin)
    })
    const btnDoge = document.querySelector('.dogecoin').addEventListener('click',() => {
        results(dogecoin)
    })
    
}));



function results(x){
    const summary = document.querySelector('.result')
    const input = document.querySelector('.input').value
    summary.classList.remove('active')
    if(input === ""){
        alert("Wpisz ilość tokenów")
    }
    else{
        let result = input * x;
        if (/^\d+\.\d{4,}$/.test(result.toString())) {
            summary.classList.add('active')
            summary.innerHTML = result.toFixed(3) + " USD"
        } else {
            summary.classList.add('active')
            summary.innerHTML = result + " USD"
          }
          console.log(summary);
    }
}
