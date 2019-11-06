const express = require('express');
const db = require('../db/theme');
const router = express.Router();

const { Theme } = require('../model/theme');
const messages = require('./messages');
const errFactory = require('./errorMessage');

router.get('/:id', (req, res) => {

    db.getTheme(req.params.id)
        .then((resultSet) => {
            const t = new Theme(resultSet.rows[0]);
            res.status(200).send(t.toJSON());
        }).catch((err) => {
            res.status(500).send(errFactory.toJson(err, messages.db.theme.get));
        });
});

router.post('/', (req, res) => {
    const t = new Theme(req.body);

    if(t != null)
        db.postTheme(t)
            .then((resultSet) => {
                console.log(resultSet);
                res.status(200).send(messages.db.success.post)
            })
            .catch((err) => {
                res.status(500).send(errFactory.toJson(err, messages.db.theme.post))
            });
    else
        res.status(500).send(errFactory.toJson("The theme is null", messages.db.theme.post))
});

module.exports = router;
