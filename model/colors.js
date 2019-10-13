class Colors{
    constructor(row){
        this.primaryColor = row.primaryColor;
        this.secondaryColor = row.secondaryColor;
        this.more = row.more;
        this.less = row.less;
        this.transfer = row.transfer;
        this.border = row.border;
        this.background = row.background;
        this.backgroundBlock = row.backgroundBlock;
        this.backgroundBlockAlt = row.backgroundBlockAlt;
        this.success = row.success;
        this.error = row.error;
        this.disabled = row.disabled;
        this.shadow = row.shadow;
        this.generalAspect = row.generalAspect;
        this.hidden = row.hidden;
    }

    toJSON() {
        return {
            primaryColor : this.primaryColor,
            secondaryColor : this.secondaryColor,
            more : this.more,
            less : this.less,
            transfer : this.transfer,
            border : this.border,
            background : this.background,
            backgroundBlock : this.backgroundBlock,
            backgroundBlockAlt : this.backgroundBlockAlt,
            success : this.success,
            error : this.error,
            disabled : this.disabled,
            shadow : this.shadow,
            generalAspect : this.generalAspect,
            hidden : this.hidden
        };
    }
}

module.exports = {
    Colors: Colors
};