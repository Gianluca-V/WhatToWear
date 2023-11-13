var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
export class WheaterAPI {
    static success(position) {
        return __awaiter(this, void 0, void 0, function* () {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            const data = yield fetch(`http://api.weatherapi.com/v1/forecast.json?key=9370370ea66246b8afb171129230611&q=${latitude},${longitude}`)
                .then((response) => { return response.json(); })
                .catch((error) => { console.error(error); });
            alert(typeof data);
            return data;
        });
    }
    static error() {
        console.log("Unable to retrieve your location");
    }
    static GetData() {
        if (!navigator.geolocation) {
            console.log("Geolocation is not supported by your browser");
        }
        else {
            console.log("Locating…");
            navigator.geolocation.getCurrentPosition(this.success, this.error);
        }
    }
}
