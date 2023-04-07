

// select HTML elements in the document
const currentTemp = document.querySelector('#temperature');
const condition = document.querySelector('#condition');
const humidity = document.querySelector('#humidity');
const weatherIcon = document.querySelector('#weather-icon');
const day1Date = document.querySelector('#day-1-date');
const day1High = document.querySelector('#day-1-high');
const day1Low = document.querySelector('#day-1-low');
const day2Date = document.querySelector('#day-2-date');
const day2High = document.querySelector('#day-2-high');
const day2Low = document.querySelector('#day-2-low');
const day3Date = document.querySelector('#day-3-date');
const day3High = document.querySelector('#day-3-high');
const day3Low = document.querySelector('#day-3-low');

const apikey = 'f93916b337d971e554180678001160ef';
const lat = '33.158092';
const lon = '-117.350594';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}`;
// const url = `https://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}`;

function displayResults(weatherData) {
    currentTemp.textContent = weatherData.main.temp.toFixed(0);
    condition.textContent = weatherData.weather[0].main;
    humidity.textContent = weatherData.main.humidity;
    
    const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', weatherData.weather[0].description);
    
    const currentDate = new Date();
    const day1 = new Date(currentDate);
    day1.setDate(currentDate.getDate() + 1);
    const day2 = new Date(currentDate);
    day2.setDate(currentDate.getDate() + 2);
    const day3 = new Date(currentDate);
    day3.setDate(currentDate.getDate() + 3);
    
    day1Date.textContent = formatDate(day1);
    day1High.textContent = weatherData.main.temp_max.toFixed(0);
    day1Low.textContent = weatherData.main.temp_min.toFixed(0);
    
     // Set day 2 temperature values
     day2Date.textContent = formatDate(day2);
     day2High.textContent = weatherData.main.temp_max.toFixed(0);
     day2Low.textContent = weatherData.main.temp_min.toFixed(0);
 
     // Set day 3 temperature values
     day3Date.textContent = formatDate(day3);
     day3High.textContent = weatherData.main.temp_max.toFixed(0);
     day3Low.textContent = weatherData.main.temp_min.toFixed(0);
}

function formatDate(date) {
    const options = {weekday: 'short', month: 'short', day: 'numeric'};
    return date.toLocaleDateString('en-US', options);
}

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();

