const db = require('../db/colors');

class Theme{
    constructor(row) {

        this.name = row.themename;
        this.beginDate = row.begindate;
        this.endDate = row.enddate;
        this.lightId = row.lightid;
        this.darkId = row.darkid;

    }

    getLightColors() {
        return db.getOneSetColors(this.lightId);
    }

    getDarkColors() {
        return db.getOneSetColors(this.darkId);
    }

    toJSON() {
        return {
            name: this.name,
            beginDate : this.beginDate,
            endDate : this.endDate,
            light : this._lightColors.toJSON(),
            dark : this._darkColors.toJSON()
        };
    }

    set lightColors(lightColors) {
        this._lightColors = lightColors;
    }

    set darkColors(darkColors) {
        this._darkColors = darkColors;
    }
}

module.exports = {
    Theme: Theme
};