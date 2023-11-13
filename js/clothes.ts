class Clothes{

    private name:String
    private type:String
    private properties:object
    private temperature:Number

    constructor(Name:String, Type:String, Properties:object, Temperature:Number) {
        this.name = Name;
        this.type = Type;
        this.properties = Properties;
        this.temperature = Temperature;
    }

    GetName(){
        return this.name;
    }
    SetName(Name:String){
        this.name = Name;
    }

    GetType(){
        return this.type;
    }
    SetType(Type:String){
        this.type = Type;
    }

    GetProperties(){
        return this.properties;
    }
    SetProperties(Properties:object){
        this.properties = Properties;
    }

    GetTemperature(){
        return this.temperature;
    }
    SetTemperature(Temperature:number){
        this.temperature = Temperature;
    }
}
