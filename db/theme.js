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

module.exports = {
    getAllThemes,
    getTheme
};