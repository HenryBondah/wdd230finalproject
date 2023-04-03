
const apiKey = 'f93916b337d971e554180678001160ef';
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

const currentTemp = document.getElementById('current-temp');
const weatherCondition = document.getElementById('weather-condition');
const humidity = document.getElementById('humidity');
const weatherIcon = document.getElementById('weather-icon');
const date1 = document.getElementById('date-1');
const date2 = document.getElementById('date-2');
const date3 = document.getElementById('date-3');
const temp1 = document.getElementById('temp-1');
const temp2 = document.getElementById('temp-2');
const temp3 = document.getElementById('temp-3');

fetch(apiUrl)
  .then((response) => response.json())
  .then((data) => {
    // Update current weather information
    currentTemp.textContent = `${Math.round(data.current.temp)}°`;
    weatherCondition.textContent = data.current.weather[0].description;
    humidity.textContent = `Humidity: ${data.current.humidity}%`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;
    weatherIcon.alt = data.current.weather[0].description;

    // Update 3-day forecast information
    const daily = data.daily;
    date1.textContent = getDateString(daily[1].dt);
    date2.textContent = getDateString(daily[2].dt);
    date3.textContent = getDateString(daily[3].dt);
    temp1.textContent = `${Math.round(daily[1].temp.day)}°`;
    temp2.textContent = `${Math.round(daily[2].temp.day)}°`;
    temp3.textContent = `${Math.round(daily[3].temp.day)}°`;
  })
  .catch((error) => console.error(error));

function getDateString(timestamp) {
  const date = new Date(timestamp * 1000);
  return date.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
}
