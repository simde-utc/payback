class Theme {
    constructor(row) {

        this.name = row.themename;
        this.beginDate = row.begindate;
        this.endDate = row.enddate;
        this.colors = JSON.parse(row.colors);

    }

    toJSON() {
        return {
            name: this.name,
            beginDate : this.beginDate,
            endDate : this.endDate,
            colors : this.colors
        };
    }
}

module.exports = {
    Theme: Theme
};