const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const date = new Date(2023,0,1);

function countdown() {
    const totalSeconds = Math.round((date - new Date()) / 1000);

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor((totalSeconds / 3600) % 24);
    const minutes = Math.floor((totalSeconds / 60) % 60);;
    const seconds = Math.floor((totalSeconds) % 60);

    daysEl.innerHTML = (days < 10) ? "0" + days: days;
    hoursEl.innerHTML = (hours < 10) ? "0" + hours: hours;
    minutesEl.innerHTML = (minutes < 10) ? "0" + minutes: minutes;
    secondsEl.innerHTML = (seconds < 10) ? "0" + seconds: seconds;
    
}

countdown();

setInterval(countdown,Infinity);