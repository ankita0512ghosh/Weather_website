import axios from "axios";
function formatDate(date) {
  let hours = date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let dayIndex = date.getDay();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[dayIndex];

  return `${day} ${hours}:${minutes}`;
}

let dateElement = document.querySelector("#date");
let currentTime = new Date();
dateElement.innerHTML = formatDate(currentTime);
// let cityInput = "";

// function convertToCelsius(event) {
//   event.preventDefault();
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = response.data.main.temp;
// }

// let celsiusLink = document.querySelector("#celsius-link");
// celsiusLink.addEventListener("click", convertToCelsius);
let apikey = "58bb081f22fea521a4a3cd7ccb24aa88";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric";

// let lat = 0;
// let long = 0;

function resultantshow(response) {
  let cit = document.querySelector("#city");
  cit.innerHTML = response.data.name;
  let wea = document.querySelector("#weather");
  wea.innerHTML = response.data.weather[0].main;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = response.data.main.temp;
}

function showPosition(position) {
  let lat = position.coords.latitude;
  let long = position.coords.longitude;
  // return [lat, long];
  axios.get(`${apiUrl}&lat=${lat}&lon=${long}&appid=${apikey}`).then(resultantshow);
}

function onclickbtn2() {
  navigator.geolocation.getCurrentPosition(showPosition);
}

function search(event) {
  event.preventDefault();
  let cityElement = document.querySelector("#city");
  let cityInput = document.querySelector("#city-input");
  cityElement.innerHTML = cityInput.value;
  axios.get(`${apiUrl}&q=${cityInput.value}&appid=${apikey}`).then(resultantshow);
  // return cityInput;
}

let searchForm = document.querySelector("#btn-1");
searchForm.addEventListener("click", search);

let btnn = document.querySelector("#btn-2");
btnn.addEventListener("click", onclickbtn2);

// axios.get(`${apiUrl}&q=${cityInput}&appid=${apikey}`).then(showclimate);

// function convertToFahrenheit(event) {
//   event.preventDefault();
//   let ftemp = document.querySelector("#temperature").value;
//   console.log(ftemp);
//   let temperatureElement = document.querySelector("#temperature");
//   temperatureElement.innerHTML = ((ftemp * 9) / 5 )+ 32;
// }

// let fahrenheitLink = document.querySelector("#fahrenheit-link");
// fahrenheitLink.addEventListener("click", convertToFahrenheit);
