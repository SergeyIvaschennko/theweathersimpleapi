let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

const getWeatherData = (city) => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
  return fetch(URL)
    .then(response => response.json())
    .catch(error => console.error('Error fetching data:', error));
}

const searchCity = () => {
  const city = document.getElementById('city-input').value;
  if (city) {
    getWeatherData(city)
      .then(data => showWeatherData(data))
      .catch(error => console.error('Error:', error));
  } else {
    alert('Please enter a city name.');
  }
}

const showWeatherData = (weatherData) => {
  const weatherDisplay = document.getElementById('weather-display');
  if (weatherData.cod === '404') {
    weatherDisplay.innerText = 'City not found. Please try again.';
  } else {
    weatherDisplay.innerText = `Temperature: ${weatherData.main.temp}°C, Description: ${weatherData.weather[0].description}`;
  }
}
