class Clothes {

    protected name: string;
    protected type: string;
    protected properties: object;
    protected temperature: number;

    constructor(Name: string, Type: string, Temperature: number) {
        this.name = Name;
        this.type = Type;
        this.properties = {...Properties};
        this.temperature = Temperature;
    }

    GetName() {
        return this.name;
    }

    SetName(Name: string) {
        this.name = Name;
    }

    GetType() {
        return this.type;
    }

    SetType(Type: string) {
        this.type = Type;
    }

    GetProperties() {
        return this.properties;
    }

    SetProperties(Properties: object) {
        this.properties = Properties;
    }

    GetTemperature() {
        return this.temperature;
    }

    SetTemperature(Temperature: number) {
        this.temperature = Temperature;
    }
}

class ClothesBottom extends Clothes {
    constructor(Name: string, Type: "sandals" | "boots" | "trousers" | "shoes", Temperature: number) {
        super(Name, Type, Temperature);
    }
}


class ClothesMid extends Clothes{
    constructor(Name: string, Type: "shorts" | "pants" | "skirt", Temperature: number) {
        super(Name, Type, Temperature);
    }
}

class ClothesTop extends Clothes{
    constructor(Name: string, Type: "jacket" | "t-shirt" | "shirt" | "sweatshirt" | "smock", Temperature: number) {
        super(Name, Type, Temperature);
    }
}

const Properties = {
    hood:false,
    waterProff:false,
    windProff:false,
    final:false
}


export{Clothes,ClothesBottom,ClothesTop,Properties};