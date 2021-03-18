function getCurrentPosition(position) {
  let apiKey = "fb8b95424c106907f53c4fc0092c4971";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  axios.get(url).then(showTemperature);
}

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let currentTemp = document.querySelector(".currently-temp");
  currentTemp.innerHTML = `${temperature}°F`;
  let city = document.querySelector(".currently-city");
  let cityName = response.data.name;
  city.innerHTML = `${cityName}`;
  let country = document.querySelector(".currently-country");
  let countryName = response.data.sys.country;
  country.innerHTML = `${countryName}`;
}

function callNavigator(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCurrentPosition);
}

function beginSearch(event) {
  console.log(searching);
}

let useCurrent = document.querySelector("#use-current");
useCurrent.addEventListener("click", callNavigator);

let searchBar = document.querySelector("#search-box");
searchBar.addEventListener("submit", beginSearch);
