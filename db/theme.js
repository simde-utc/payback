const Pool = require('pg').Pool;
const config = require('../config/db_config');
const testConfig = require('../config/db_test_config');

const pool = new Pool({
    user: config.user,
    host: config.host,
    database: config.database,
    password: config.password,
    port: config.port,
});

const getAllThemes = () => {
    return pool.query('select * from theme');
};

const getTheme = (id) => {
    return pool.query('select * from theme where $1 = id', [id]);
};

const postTheme = (theme) => {
    const text = "INSERT INTO theme(themename, begindate, enddate, colors) VALUES($1, $2, $3, $4)";
    const values = theme.toArray();
    return pool.query(text, values);

};

const deleteTheme = (theme) => {};

const deleteAll = () => {
    if(process.env.NODE_ENV.equals(testConfig.NODE_ENV)) {
        getAllThemes()
            .then((resultSet) => {
                resultSet.rows.forEach((row) => {
                    let t = new Theme(row);
                    deleteTheme(t);
                })
            })
    }
};

module.exports = {
    getAllThemes,
    getTheme,
    postTheme,
    deleteAll,
    deleteTheme
};
