//Updetes current time/date

function showCurrentDate(currentDate) {
  let date = currentDate.getDate();
  let hours = currentDate.getHours();
  let minutes = currentDate.getMinutes();

  let dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let day = dayNames[currentDate.getDay()];

  let monthName = [
    "JAN",
    "FEB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  let month = monthName[currentDate.getMonth()];

  if (hours < 10) {
    hours = `0${hours}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let fullDate = `${day} ${date} ${month}, ${hours}:${minutes}`;

  return fullDate;
}

let currentDate = new Date();

let currentDateElement = document.querySelector(".current-date");
currentDateElement.innerHTML = showCurrentDate(currentDate);

// Updates City from the Input/Search

function searchCity(event) {
  event.preventDefault();
  let searchValue = document.querySelector("#search-value");
  city = searchValue.value;

  let apiKey = `9a5034o3fd0ad6bc1bata98ee2fcd7b0`;
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

  axios.get(apiUrl).then(showCurrentMeteo);
}

let searchButton = document.querySelector("#search-btn");
searchButton.addEventListener("click", searchCity);

// Updates current weather

function showCurrentMeteo(response) {
  let currentTemp = Math.round(response.data.temperature.current);
  let feelsLikeTemp = Math.round(response.data.temperature.feels_like);
  let description = response.data.condition.description;
  let windSpeed = response.data.wind.speed;
  let pressure = response.data.temperature.pressure;
  let humidity = response.data.temperature.humidity;
  let city = response.data.city;
  let weatherIcon = response.data.condition.icon_url;

  let currentTempElement = document.querySelector(".current-temp-value");
  currentTempElement.innerHTML = currentTemp;

  let feelsLikeTempElement = document.querySelector(".feels-like-temp");
  feelsLikeTempElement.innerHTML = feelsLikeTemp;

  let descriptionElement = document.querySelector(".description");
  descriptionElement.innerHTML = description;

  let windSpeedElement = document.querySelector("#wind-speed");
  windSpeedElement.innerHTML = windSpeed;

  let pressureElement = document.querySelector(".pressure");
  pressureElement.innerHTML = pressure;

  let humidityElement = document.querySelector(".humidity");
  humidityElement.innerHTML = humidity;

  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = city;

  let imageElement = document.querySelector("#weather-icon");
  imageElement.innerHTML =
    '<img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png" />';

  console.log(imageElement);
}
