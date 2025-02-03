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
  let cityElement = document.querySelector("h1");
  cityElement.innerHTML = searchValue.value;
}

let searchButton = document.querySelector("#search-btn");
searchButton.addEventListener("click", searchCity);
