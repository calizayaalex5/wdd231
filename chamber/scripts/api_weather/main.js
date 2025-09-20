const lat = '-20.2415834831197';
const lon = '-70.13146833118768';
const key = '9e878f816280f1ddc7f113f6d7412181';

const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${key}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&lang=es&appid=${key}`;

async function fetchWeather(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
        return null;
    }
}

// Mostrar clima actual
function displayCurrentWeather(data) {
    const current = document.querySelector('#current-weather');

    if (!data) {
        current.textContent = "No se pudo cargar el clima";
        return;
    }

    const iconCode = data.weather[0].icon;

    current.innerHTML = `
        <div style="display:flex; align-items:center; gap:10px;">
            <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${data.weather[0].description}" width="80" height="80">
            <div>
                <strong>${data.main.temp} °C</strong> - ${data.weather[0].description}<br>
                <strong>Sensación térmica:</strong> ${data.main.feels_like} °C<br>
                <strong>Humedad:</strong> ${data.main.humidity}%<br>
                <strong>Viento:</strong> ${data.wind.speed} m/s
            </div>
        </div>
    `;
}

function displayForecast(data) {
    const forecastContainer = document.querySelector('#weather-forecast');

    if (!data) {
        forecastContainer.textContent = "No se pudo cargar el pronóstico";
        return;
    }

    const forecastDays = [];
    const usedDates = new Set();

    data.list.forEach(item => {
        const date = item.dt_txt.split(' ')[0];
        const hour = item.dt_txt.split(' ')[1];

        if (hour === "12:00:00" && !usedDates.has(date)) {
            forecastDays.push(item);
            usedDates.add(date);
        }
    });


    forecastDays.slice(0, 3).forEach(day => {
        const date = new Date(day.dt_txt).toLocaleDateString('es-CL', { weekday: 'long', day: 'numeric', month: 'short' });
        const iconCode = day.weather[0].icon;
        forecastContainer.innerHTML += `
            <div style="display:flex; align-items:center; gap:10px; margin-bottom:10px;">
                <strong>${date}:</strong>
                <img src="https://openweathermap.org/img/wn/${iconCode}@2x.png" alt="${day.weather[0].description}" width="50" height="50">
                ${day.main.temp} °C - ${day.weather[0].description}
            </div>
        `;
    });
}

async function init() {
    const currentData = await fetchWeather(urlCurrent);
    displayCurrentWeather(currentData);

    const forecastData = await fetchWeather(urlForecast);
    displayForecast(forecastData);
}

init();