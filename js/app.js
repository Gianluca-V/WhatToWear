import { WeatherAPI } from "./wheater.js";
document.addEventListener("DOMContentLoaded", async () => {
    try {
        const data = await WeatherAPI.GetData();
        console.log(data);
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
        iconElement.setAttribute("src", icon);
        const locationElement = document.querySelector(".location__city");
        const location = data.location.name + ", " + data.location.country;
        locationElement.textContent = location;
        const timeElement = document.querySelector(".location__time");
        const localtimeEpoch = data.location.localtime_epoch;
        const date = new Date(localtimeEpoch * 1000);
        const dayOfWeek = date.getDay();
        const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const dayName = daysOfWeek[dayOfWeek];
        timeElement.textContent = dayName;
    }
    catch (error) {
        console.error(error);
    }
});
