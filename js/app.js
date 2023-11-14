import { WeatherAPI } from "./wheater.js";
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const data = await WeatherAPI.GetData();
        const temperatureMin = data.forecast.forecastday[0].day.maxtemp_c;
        const temperatureMax = data.forecast.forecastday[0].day.mintemp_c;
        const temperatureMinElement = document.querySelector(".temperature__min");
        const temperatureMaxElement = document.querySelector(".temperature__max");
        temperatureMaxElement.textContent = temperatureMax;
        temperatureMinElement.textContent = temperatureMin;
    }
    catch (error) {
        console.error(error);
    }
});
