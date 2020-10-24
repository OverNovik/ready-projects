const weatherIcon = document.querySelector('.weather-icon'),
    temperature = document.querySelector('.temperature'),
    weatherDescription = document.querySelector('.weather-description'),
    humidity = document.querySelector('.humidity'),
    windSpeed = document.querySelector('.wind-speed'),
    city = document.querySelector('.city');

async function getWeather() {
    try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=en&appid=e7a2e9af419afb3a1dfffc4007c7a295&units=metric`;
    const res = await fetch(url);
    const data = await res.json();
    
    weatherIcon.className = 'weather-icon owf';
    weatherIcon.classList.add(`owf-${data.weather[0].id}`);
    temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
    weatherDescription.textContent = data.weather[0].description;
    humidity.textContent = `${data.main.humidity} %`;
    windSpeed.textContent = `${data.wind.speed} m/s`;
    city.blur();
    } catch {
        city.textContent = 'Enter city';
    };
};

function setCity(event) {
    if (event.code === 'Enter') {
      getWeather();
      city.blur();
    };
};

document.addEventListener('DOMContentLoaded', getWeather);
city.addEventListener('keypress', setCity);