export class WeatherAPI {
    private static meteorologicalData: object = {};

    private static async success(position: any): Promise<void> {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        try {
            const response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9370370ea66246b8afb171129230611&q=${latitude},${longitude}`);
            const data = await response.json();
            WeatherAPI.meteorologicalData = data;
        } catch (error) {
            console.error(error);
        }
    }

    private static error(): void {
        console.log("Unable to retrieve your location");
    }

    public static GetData(): Promise<object> {
        return new Promise((resolve, reject) => {
            if (!navigator.geolocation) {
                console.log("Geolocation is not supported by your browser");
                reject("Geolocation not supported");
                return false;
            } 
            console.log("Locating…");
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    WeatherAPI.success(position).then(() => {
                        resolve(WeatherAPI.meteorologicalData);
                    });
                },
                () => {
                    WeatherAPI.error();
                    reject("Error retrieving geolocation");
                }
            );

        });
    }
}