// script.js

function getWeather() {
    const apiKey = 'ec0dcb1113ccdaaaf588334a25d1656a';
    const city = document.getElementById('locationInput').value;

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
            updateBackground(data.weather[0].main);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const temperature = Math.round(data.main.temp - 273.15);

    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

function updateBackground(weatherCondition) {
    const body = document.body;

    // Define background images based on weather conditions
    const backgroundImages = {
        Clear: 'clear-sky-bg.jpg',
        Clouds: 'cloudy-bg.jpg',
        Rain: 'rainy-bg.jpg',
        Snow: 'snowy-bg.jpg',
        Thunderstorm: 'thunderstorm-bg.jpg',
        Mist: 'misty-bg.jpg',
    };

    // Set default background if the condition is not found
    const defaultImage = 'default-bg.jpg';

    // Update background image based on weather condition
    body.style.backgroundImage = `url('${backgroundImages[weatherCondition] || defaultImage}')`;
}

// Call getWeather function on button click
document.getElementById('getWeatherButton').addEventListener('click', getWeather);
// script.js

function getWeather() {
    const apiKey = 'ec0dcb1113ccdaaaf588334a25d1656a';
    const city = document.getElementById('locationInput').value;

    if (!city) {
        alert('Please enter a city name');
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            displayWeather(data);
            updateBackground(data.weather[0].main);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function displayWeather(data) {
    const weatherInfo = document.getElementById('weatherInfo');
    const temperature = Math.round(data.main.temp - 273.15);

    weatherInfo.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>Temperature: ${temperature}°C</p>
        <p>Weather: ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
}

function updateBackground(weatherCondition) {
    const body = document.body;

    // Define background images based on weather conditions
    const backgroundImages = {
        Clear: 'clear-sky-bg.jpg',
        Clouds: 'cloudy-bg.jpg',
        Rain: 'rainy-bg.jpg',
        Snow: 'snowy-bg.jpg',
        Thunderstorm: 'thunderstorm-bg.jpg',
        Mist: 'misty-bg.jpg',
    };

    // Set default background if the condition is not found
    const defaultImage = 'default-bg.jpg';

    // Update background image based on weather condition
    body.style.backgroundImage = `url('${backgroundImages[weatherCondition] || defaultImage}')`;
}

// Call getWeather function on button click
document.getElementById('getWeatherButton').addEventListener('click', getWeather);
