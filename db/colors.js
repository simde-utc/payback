const Pool = require('pg').Pool;
const config = require('../db_config');

const pool = new Pool({
    user: config.user,
    host: config.host,
    database: config.database,
    password: config.password,
    port: config.port,
});

let getOneSetColors = (id) => {
    return pool.query('select * from colors where $1 = id', [id]);
};

module.exports = {
    getOneSetColors
};