const app = require('express')();
const bodyParser = require('body-parser');
const morgan = require('morgan');

const themeRouter = require('./routes/theme');

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
    res.status(404).send('Page introuvable !');
});

app.listen(8079, () => {
    console.log("the server is listening...");
});