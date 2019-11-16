class Theme {
    constructor(json) {
        this.themename = json.themename;
        this.begindate = json.begindate;
        this.enddate = json.enddate;
        this.colors = json.colors;
    }

    toJSON() {
        return {
            themename: this.themename,
            begindate : this.begindate,
            enddate : this.enddate,
            colors : this.colors
        };
    }

    toArray(){
        return [
            this.themename,
            this.begindate,
            this.enddate,
            this.colors
        ];
    }
}

module.exports = {
    Theme: Theme
};
