/* Carrossel automático */
let slide = 0;
const slides = document.getElementById('slides');

setInterval(() => {
    slide++;

    if(slide > 3){
        slide = 0;
    }

    slides.style.transform =
        `translateX(-${slide * 100}vw)`;

}, 4000);


/* Contador desde 09/06/2015 */
const startDate = new Date('2015-06-09');

function updateCounter(){

    const today = new Date();

    const diff =
        today - startDate;

    const totalDays =
        Math.floor(diff / (1000 * 60 * 60 * 24));

    const years =
        Math.floor(totalDays / 365.25);

    const months =
        Math.floor(totalDays / 30.44);

    const weeks =
        Math.floor(totalDays / 7);

    document.getElementById('years').textContent =
        years;

    document.getElementById('months').textContent =
        months;

    document.getElementById('weeks').textContent =
        weeks;

    document.getElementById('days').textContent =
        totalDays;
}

updateCounter();

const music = document.getElementById('music');
const playBtn = document.getElementById('playBtn');

document.addEventListener('click', () => {
    music.play();
}, { once: true });

document.addEventListener('touchstart', () => {
    music.play();
}, { once: true });

playBtn.addEventListener('click', () => {
    music.play();
});