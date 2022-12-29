const pianoKeys = document.querySelectorAll('.piano-keys .key');
let allKeys = [];
const audio = new Audio('tunes/a.wav');
const volume = document.querySelector('.volume-slider input')
const checkBox = document.querySelector('.check-box input')
const letter = document.querySelectorAll('.key span')

console.log(letter);
const playTune = (key) => {
    audio.src = `tunes/${key}.wav`
    audio.play()

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add('active')
    setTimeout(() =>{
        clickedKey.classList.remove('active')
    },150)
}

pianoKeys.forEach(key =>{
    allKeys.push(key.dataset.key)
    key.addEventListener('click', () => playTune(key.dataset.key))
})

const pressedKey = (e) => {
   if(allKeys.includes(e.key)) playTune(e.key)
}

const handle = (e) =>{
    audio.volume = e.target.value
}

const swift = () => {
    pianoKeys.forEach(key => key.classList.toggle('hide'))
}

checkBox.addEventListener('click',swift)
volume.addEventListener('input',handle)
document.addEventListener('keydown', pressedKey)