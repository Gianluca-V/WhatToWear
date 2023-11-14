class WheaterAPI {
    static meteorologicalData = {};
    static async success(position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9370370ea66246b8afb171129230611&q=${latitude},${longitude}`)
            .then((response) => { return response.json(); })
            .catch((error) => { console.error(error); });
        this.meteorologicalData = data;
    }
    static error() {
        console.log("Unable to retrieve your location");
    }
    static GetData() {
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
            return false;
        }
        else {
            console.log("Locating…");
            navigator.geolocation.getCurrentPosition(this.success, this.error);
            return this.meteorologicalData;
        }
    }
}
export { WheaterAPI };
