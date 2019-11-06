const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const themeRouter = require('./routes/theme');
const config = require("./config/server_config");

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use('/theme', themeRouter);

app.use((req, res, next) => {
    res.setHeader('Content-Type', 'text/plain');
    res.status(404).send('File not found');
});

app.listen(config.port, () => {
    console.log("the server is listening...");
});

module.exports = app;
