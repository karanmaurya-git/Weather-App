const apiKey = "68cbaf4ec8cb696a95e784e49edd2c83";

async function getWeather() {

    const city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    try {
        const url =
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) {
            document.getElementById("result").innerHTML =
            "City not found ❌";
            return;
        }

        document.getElementById("result").innerHTML = `
            <h2>${data.name}</h2>
            <p>Temperature: ${data.main.temp} °C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Weather: ${data.weather[0].description}</p>
        `;

    } catch (error) {
        console.log(error);
        document.getElementById("result").innerHTML =
        "Something went wrong ❌ Check internet or API key";
    }
}