const API_KEY = "b9e44011c450fa837063f0737e1f1ce7";

function onGeoSuccess(positon) {
    const lat = positon.coords.latitude;
    const lng = positon.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const weatherContainer = document.querySelector("#weatherContainer");
        const weather = weatherContainer.querySelector("#weather");
        const temperature = weatherContainer.querySelector("#temperature");
        const city = weatherContainer.querySelector("#city");

        weather.innerText =  data.weather[0].main;
        temperature.innerText = data.main.temp;
        city.innerText = data.name;
    });
}

function onGeoError() {
    alert("Can't find you");
}

navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);