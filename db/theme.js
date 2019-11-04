const Pool = require('pg').Pool;
const config = require('../db_config');

const pool = new Pool({
    user: config.user,
    host: config.host,
    database: config.database,
    password: config.password,
    port: config.port,
});

let getAllThemes = () => {
    return pool.query('select * from theme');
};

let getTheme = (id) => {
    return pool.query('select * from theme where $1 = id', [id]);
};

let postTheme = (theme) => {
    let text = "INSERT INTO theme(themename, begindate, enddate, colors) VALUES($1, $2, $3, $4)";
    let values = theme.toArray();
    return pool.query(text, values);

};

module.exports = {
    getAllThemes,
    getTheme,
    postTheme
};