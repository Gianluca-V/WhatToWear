class user{
    private preferences:object = {};
    private clothes:Clothes[] = [];

    setPreferences(Preferences:object){
        this.preferences = Preferences;
    }
    GetPreferences(){
        return this.preferences;
    }

    AddClothes(Clothes:Clothes){
        this.clothes.push(Clothes);
    }
    RemoveClothes(Clothes:Clothes){
        this.clothes.filter(c => c != Clothes);
    }
    GetClothes(){
        return this.clothes;
    }
}

