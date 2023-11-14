class user {
    preferences = {};
    clothes = [];
    setPreferences(Preferences) {
        this.preferences = Preferences;
    }
    GetPreferences() {
        return this.preferences;
    }
    AddClothes(Clothes) {
        this.clothes.push(Clothes);
    }
    RemoveClothes(Clothes) {
        this.clothes.filter(c => c != Clothes);
    }
    GetClothes() {
        return this.clothes;
    }
}
