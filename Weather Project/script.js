
const apiKey = "07761675b0e7742bcf24eae9c2036fad";

const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");
const weatherIcon = document.getElementById("weatherIcon");
const error = document.getElementById("error");

async function getWeather() {

    const city = cityInput.value.trim();

    if (city === "") {
        error.innerText = "Please enter a city name.";
        return;
    }

    error.innerText = "";

    const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod != 200) {
            error.innerText = "City not found!";
            return;
        }

        
        cityName.innerText = data.name;
        temperature.innerText = Math.round(data.main.temp) + "°C";
        description.innerText = data.weather[0].description;
        humidity.innerText = data.main.humidity + "%";
        wind.innerText = data.wind.speed + " km/h";

        const iconCode = data.weather[0].icon;
        weatherIcon.src =
            `https://openweathermap.org/img/wn/${iconCode}@2x.png`;

    }

    catch (err) {
        error.innerText = "Something went wrong!";
        console.log(err);
    }

}

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", function (event) {

    if (event.key === "Enter") {
        getWeather();
    }

});
