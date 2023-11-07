class Clothes{
    constructor(Name, Type, Properties, temperature){
        this.name = Name;
        this.type = Type;
        this.properties = Properties;
        this.temperature = Temperature;
    }

    GetName(){
        return this.name;
    }
    SetName(Name){
        this.name = Name;
    }

    GetType(){
        return this.type;
    }
    SetType(Type){
        this.type = Type;
    }

    GetProperties(){
        return this.properties;
    }
    SetProperties(Properties){
        this.properties = Properties;
    }

    GetTemperature(){
        return this.temperature;
    }
    SetTemperature(Temperature){
        this.temperature = Temperature;
    }
}
