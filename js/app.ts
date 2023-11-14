import { WeatherAPI } from "./wheater.js";

document.addEventListener("DOMContentLoaded",async () => {
    try {
        const data = await WeatherAPI.GetData();
        console.log(data);
        /*const temperatureMin = data.forecast.forecastday.day.mintemp_c
        const temperatureMax = data.forecast.forecastday.day.maxtemp_c*/
    } catch (error) {
        console.error(error);
    }
});