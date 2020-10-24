
const images = ['01.jpg', '02.jpg', '03.jpg', '05.jpg', '06.jpg',
                '07.jpg', '08.jpg', '09.jpg', '10.jpg', '11.jpg',
                '12.jpg', '13.jpg', '14.jpg', '15.jpg', '16.jpg',
                '17.jpg', '18.jpg', '19.jpg', '20.jpg'];

const baseNight = 'https://raw.githubusercontent.com/OverNovik/ready-projects/momentum/momentum/assets/images/night/';
const baseDay = 'https://raw.githubusercontent.com/OverNovik/ready-projects/momentum/momentum/assets/images/day/';
const baseEvening = 'https://raw.githubusercontent.com/OverNovik/ready-projects/momentum/momentum/assets/images/evening/';
const baseMorning = 'https://raw.githubusercontent.com/OverNovik/ready-projects/momentum/momentum/assets/images/morning/';
let i = 0;

const imagesMap = {
    evening: getImages(baseEvening),
    morning: getImages(baseMorning),
    day: getImages(baseDay),
    night: getImages(baseNight)
};

const allImages = [...imagesMap.morning, ...imagesMap.day, ...imagesMap.evening, ...imagesMap.night];

function getImages(base) {
    return images.map(image => `${base}${image}`);
};

function viewBgImage(data) {
  const body = document.querySelector('body');
  const src = data;
  const img = document.createElement('img');

  img.src = src;
  img.onload = () => {      
    body.style.backgroundImage = `url(${src})`;
  }; 
};

function changeImageHandler() {
  const index = i % allImages.length;
  const imageSrc = allImages[index];
  
  viewBgImage(imageSrc);
  i++;
};

const btn = document.querySelector('.btn');

btn.addEventListener('click', changeImageHandler);

function setRandomImage(greetingText, color, time) {
    const currentImages = imagesMap[time];
    const greeting = document.getElementById('greeting');

    greeting.textContent = greetingText;
    document.body.style.backgroundImage = `url(${currentImages[Math.floor(Math.random() * currentImages.length)]})`;
    document.body.style.color = color;
};