const sec = document.querySelector('.second');
const min = document.querySelector(".minute");
const hour = document.querySelector('.hour');



setInterval(() => {
    let time = new Date();
    let current_sec = time.getSeconds();
    let current_min = time.getMinutes();
    let current_hour = time.getHours();

    sec.style.transform = `rotate(${katakuta(60, current_sec)}deg)`;
    min.style.transform = `rotate(${katakuta(60, current_min)}deg)`;
    hour.style.transform = `rotate(${katakuta(12, current_hour)}deg)`;
}, 1000);

function katakuta(time, current) {
    return (360 * current) / time;
}