const time = document.getElementById('time'),
    timeDay = document.getElementById('date'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

function showDate() {
    let todayDate = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let month = ['January','February','March','April','May','June','July','August','September','October','November','December'];

    timeDay.innerHTML = `${days[todayDate.getDay()]} ${todayDate.getDate()} ${month[todayDate.getMonth()]} ${todayDate.getFullYear()}`;
};

function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    hour = hour % 24 || 24;

    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;

    setTimeout(showTime, 1000);
};

function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();

    if (hour < 12 && hour > 6 || hour === 6) {
        setRandomImage('Good Morning', 'yellow', 'morning');
    } else if (hour < 18 && hour > 12 || hour === 12) {
        setRandomImage('Good Day', 'yellow', 'day');
    } else if (hour < 24 && hour > 18 || hour === 18){
        setRandomImage('Good Evening', 'white', 'evening');
    } else {
        setRandomImage('Good Night', 'white', 'night');
    }
};

function setHourBgGreet() {

}

function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name');
    }
};

function setName(event) {
    if (event.type === 'keypress') {
        if (event.which == 13 || event.keyCode == 13) {
            localStorage.setItem('name', event.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', event.target.innerText);
    }
};

function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    } else {
        focus.textContent = localStorage.getItem('focus');
    }
};

function setFocus(event) {
    if (event.type === 'keypress') {
        if (event.which == 13 || event.keyCode == 13) {
            localStorage.setItem('focus', event.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', event.target.innerText);
    }
};

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);


showTime();
getFocus(); 
getName();
setBgGreet();
setInterval(setBgGreet, 1000 * 60 * 60);
showDate();