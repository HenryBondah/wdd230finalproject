
// const apiKey = 'f93916b337d971e554180678001160ef';
// const lat = "33.158092"
// const lon = "-117.350594"
// const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial`;

// const currentTemp = document.getElementById('temperature');
// const weatherCondition = document.getElementById('condition');
// const humidity = document.getElementById('humidity');
// const weatherIcon = document.getElementById('weather-icon');
// const date1 = document.getElementById('date-1');
// const date2 = document.getElementById('date-2');
// const date3 = document.getElementById('date-3');
// const temp1 = document.getElementById('temp-1');
// const temp2 = document.getElementById('temp-2');
// const temp3 = document.getElementById('temp-3');

// fetch(apiUrl)
//   .then((response) => response.json())
//   .then((data) => {
   
//     // Update current weather information
//     currentTemp.textContent = `${Math.round(data.current.temp)}°`;
//     weatherCondition.textContent = data.current.weather[0].description;
//     humidity.textContent = `Humidity: ${data.current.humidity}%`;
//     weatherIcon.src = `https://openweathermap.org/img/wn/${data.current.weather[0].icon}.png`;
//     weatherIcon.alt = data.current.weather[0].description;

//     // Update 3-day forecast information
//     const daily = data.daily;
//     date1.textContent = getDateString(daily[1].dt);
//     date2.textContent = getDateString(daily[2].dt);
//     date3.textContent = getDateString(daily[3].dt);
//     temp1.textContent = `${Math.round(daily[1].temp.day)}°`;
//     temp2.textContent = `${Math.round(daily[2].temp.day)}°`;
//     temp3.textContent = `${Math.round(daily[3].temp.day)}°`;
//   })
//   .catch((error) => console.error(error));

// function getDateString(timestamp) {
//   const date = new Date(timestamp * 1000);
//   return date.toLocaleString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
// }

// select HTML elements in the document



// const currentTemp = document.querySelector('#current-temp');
// const weatherIcon = document.querySelector('#weather-icon');
// const captionDesc = document.querySelector('figcaption');

// const apikey = 'f93916b337d971e554180678001160ef';
// const lat = '33.158092';
// const lon = '-117.350594';

//  const currentTemp = document.getElementById('#temperature');
// const weatherCondition = document.getElementById('#condition');
// const humidity = document.getElementById('#humidity');
// const weatherIcon = document.getElementById('#weather-icon');
// const date1 = document.getElementById('date-1');
// const date2 = document.getElementById('date-2');
// const date3 = document.getElementById('date-3');
// const temp1 = document.getElementById('temp-1');
// const temp2 = document.getElementById('temp-2');
// const temp3 = document.getElementById('temp-3');

// const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

// function displayResults(weatherData) {
//     currentTemp.innerHTML = `<strong>${weatherData.main.temp.toFixed(0)}</strong>`;

//     const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@4x.png`
//     const desc = weatherData.weather[0].main;
//     weatherIcon.setAttribute('src', iconsrc);
//     weatherIcon.setAttribute('alt', desc);
//     captionDesc.textContent = desc;  

//   }

// async function apiFetch() {
//     try {
//       const response = await fetch(url);
//       if (response.ok) {
//         const data = await response.json();
//         // console.log(data); // this is for testing the call
//         displayResults(data);
//       } else {
//           throw Error(await response.text());
//       }
//     } catch (error) {
//         console.log(error);
//     }
//   }
  
//   apiFetch();

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

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=imperial`;

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
     day2High.textContent = weatherData.daily[1].temp.max.toFixed(0);
     day2Low.textContent = weatherData.daily[1].temp.min.toFixed(0);
 
     // Set day 3 temperature values
     day3Date.textContent = formatDate(day3);
     day3High.textContent = weatherData.daily[2].temp.max.toFixed(0);
     day3Low.textContent = weatherData.daily[2].temp.min.toFixed(0);
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

