class Theme {
    constructor(json) {
        this.name = json.themename;
        this.beginDate = json.begindate;
        this.endDate = json.enddate;
        this.colors = json.colors;
    }

    toJSON() {
        return {
            name: this.name,
            beginDate : this.beginDate,
            endDate : this.endDate,
            colors : this.colors
        };
    }

    toArray(){
        return [
            this.name,
            this.beginDate,
            this.endDate,
            this.colors
        ];
    }
}

module.exports = {
    Theme: Theme
};
