const Pool = require('pg').Pool;
const config = require('../config/db_config');
const testConfig = require('../config/db_test_config');

const { Theme } = require('../model/theme');

const errFactory = require('../routes/errorMessage');
const messages = require('../routes/messages');

const pool = new Pool({
    user: config.user,
    host: config.host,
    database: config.database,
    password: config.password,
    port: config.port,
});

const getAllThemes = () => {
    return pool.query('SELECT * FROM theme').then((resultSet) => { return resultSet.rows });
};

const getTheme = (id) => {
    return pool.query('SELECT * FROM theme WHERE $1 = id', [id]).then((resultSet) => { return resultSet.rows[0] });
};

const postTheme = (theme) => {
    const text = "INSERT INTO theme(themename, begindate, enddate, colors) VALUES($1, $2, $3, $4) RETURNING id";
    const values = theme.toArray();
    return pool.query(text, values).then((resultSet) => { return resultSet.rows[0].id });

};

const deleteTheme = (theme) => {
    const text = "DELETE FROM theme WHERE id = $1";
    return pool.query(text, [theme.id]).then(() => { return theme });
};

module.exports = {
    getAllThemes,
    getTheme,
    postTheme,
    deleteTheme
};
