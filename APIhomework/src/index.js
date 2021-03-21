function getCurrentPosition(position) {
  let apiKey = "fb8b95424c106907f53c4fc0092c4971";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
  axios.get(url).then(function(response) {
    showTemperature(response.data.main.temp, response.data.name, response.data.sys.country);
  });
}
                      
function showTemperature(temp, city, country) {
  const temperature = Math.round(temp);
  const city = city.trim();
  const country = country.trim();
    
  const temperatureEl = document.querySelect('.currently-temp');
  const currentCityEl = document.querySelector('.currently-city');
  const currentCountryEl = document.querySelector('.currently-country');
    
  temperatureEl.innerHTML = `${temperature}°F`;
  currentCityEl.innerHTML = city;
  currentCountryEl.innerHTML = country;  
}

function callNavigator(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getCurrentPosition);
}

function beginSearch(event) {
  event.preventDefault();
  let city = document.querySelector(".currently-city");
  city.innerHTML = `${searchInput.value.trim().toUpperCase()}`;
  let apiK = "fb8b95424c106907f53c4fc0092c4971";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=imperial&appid=${apiK}`;
  axios.get(apiUrl).then(function(response) {
    showTemperature(response.data.main.temp, response.data.name, response.data.sys.country);
  });
}

let useCurrent = document.querySelector("#use-current");
useCurrent.addEventListener("click", callNavigator);

let searchInput = document.querySelector("#search-box");
let submitButton = document.querySelector(".search-bar");
submitButton.addEventListener("submit", beginSearch);
