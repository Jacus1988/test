const images = [
    {
        id:0,
        img:'./slideImage/hot-chocolate.webp',
    },
    {
        id:1,
        img:'./slideImage/iceCream.png',
    },
    {
        id:2,
        img:'./slideImage/kwiaty.png',
    },
    {
        id:3,
        img:'./slideImage/miniIceCream.jpg',
    },
];
const sliderImage = document.querySelector('.img-box')

let currentIndex = 0;

function changeSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex].img;
  }

  setInterval(changeSlide, 3000);