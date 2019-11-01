module.exports.errorMessageToJson = (err, text) => {
    return JSON.parse("{ \"message\" : \""+ text +"\", \"err\" : \"" + err + "\" }");
};