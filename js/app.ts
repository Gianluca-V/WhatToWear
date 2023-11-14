import { WeatherAPI } from "./wheater.js";

document.addEventListener("DOMContentLoaded",async () => {
    try {
        const data = await WeatherAPI.GetData();
        console.log(data)
        const temperatureMin = data.forecast.forecastday[0].day.maxtemp_c;
        const temperatureMax = data.forecast.forecastday[0].day.mintemp_c;
        const temperatureMinElement = document.querySelector(".temperature__min");
        const temperatureMaxElement = document.querySelector(".temperature__max");
        temperatureMaxElement.textContent = temperatureMax;
        temperatureMinElement.textContent = temperatureMin;

        const temperatureConditionElement = document.querySelector(".temperature__condition");
        const temperatureCondition = data.forecast.forecastday[0].day.condition.text;
        temperatureConditionElement.textContent = temperatureCondition;

        const iconElement = document.querySelector(".weather-icon__image");
        const icon = data.forecast.forecastday[0].day.condition.icon;
        iconElement.setAttribute("src",icon);
    } catch (error) {
        console.error(error);
    }
});