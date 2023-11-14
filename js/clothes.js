class Clothes {
    name;
    type;
    properties;
    temperature;
    constructor(Name, Type, Temperature) {
        this.name = Name;
        this.type = Type;
        this.properties = { ...Properties };
        this.temperature = Temperature;
    }
    GetName() {
        return this.name;
    }
    SetName(Name) {
        this.name = Name;
    }
    GetType() {
        return this.type;
    }
    SetType(Type) {
        this.type = Type;
    }
    GetProperties() {
        return this.properties;
    }
    SetProperties(Properties) {
        this.properties = Properties;
    }
    GetTemperature() {
        return this.temperature;
    }
    SetTemperature(Temperature) {
        this.temperature = Temperature;
    }
}
class ClothesBottom extends Clothes {
    constructor(Name, Type, Temperature) {
        super(Name, Type, Temperature);
    }
}
class ClothesMid extends Clothes {
    constructor(Name, Type, Temperature) {
        super(Name, Type, Temperature);
    }
}
class ClothesTop extends Clothes {
    constructor(Name, Type, Temperature) {
        super(Name, Type, Temperature);
    }
}
const Properties = {
    hood: false,
    waterProff: false,
    windProff: false,
    final: false
};
export { Clothes, ClothesBottom, ClothesTop, Properties };
