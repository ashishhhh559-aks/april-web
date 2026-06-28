const API_key = "07761675b0e7742bcf24eae9c2036fad";

async function getWeather() {
    const city = document.getElementById("city").value.trim();
    const errorMessage = document.getElementById("error-message");

    if (city === "") {
        errorMessage.innerText = "Please enter city name!";
        return;
    }

    try {
        const response = await fetch( `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric` );

        const data = await response.json();
        console.log(data);

        if (data.cod != 200) {
            errorMessage.innerText = data.message;
            return;
        }

        errorMessage.innerText = "";

        document.getElementById("city-name").innerText = data.name;
        document.getElementById("temp").innerText =
            "Temperature: " + data.main.temp + " °C";

        document.getElementById("condition").innerText =
            "Condition: " + data.weather[0].main;

        document.getElementById("humidity").innerText =
            "Humidity: " + data.main.humidity + "%";

        document.getElementById("wind").innerText =
            "Wind Speed: " + data.wind.speed + " m/s";

    } catch (error) {
        errorMessage.innerText = "Something went wrong!";
        console.log(error);
    }
}