export class WheaterAPI {
    private static async success(position:any) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const data = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9370370ea66246b8afb171129230611&q=${latitude},${longitude}`)
            .then((response) => { return response.json() })
            .catch((error) => { console.error(error) });
        alert(typeof data);
        return data;
    }

    private static error() {
        console.log("Unable to retrieve your location");
    }

    public static GetData() {
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
        } else {
            console.log("Locating…");
            navigator.geolocation.getCurrentPosition(this.success, this.error);
        }
    }
}
