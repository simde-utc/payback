module.exports.toJson = (err, text) => {
    return JSON.parse("{ \"message\" : \""+ text +"\", \"err\" : \"" + err + "\" }");
};