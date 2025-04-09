let hours = document.querySelector(".hours h1");
let minutes = document.querySelector(".minutes h1");
let seconds = document.querySelector(".seconds h1");
let am = document.querySelector('.container h2');

setInterval(() => {
    let currentTime = new Date();
    let hrs = currentTime.getHours();
    let mins = currentTime.getMinutes();
    let secs = currentTime.getSeconds();
    
    hrs >= 12 ? am.innerHTML = 'PM' : am.innerHTML = 'AM';
    hrs = hrs % 12;
    
    hours.innerHTML = (hrs < 10) ? '0' + hrs : hrs;
    minutes.innerHTML = (mins < 10) ? '0' + mins : mins;
    seconds.innerHTML = (secs < 10) ? '0' + secs : secs;
}, 1000);