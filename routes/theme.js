const express = require('express');
const db = require('../db/theme');
const router = express.Router();

const { Theme } = require('../model/theme');
const messages = require('./messages');
const errFactory = require('./errorMessage');

router.get('/', (req, res) => {
    db.getAllThemes()
        .then((themes) => res.status(200).send(themes))
        .catch((err) => {
            res.status(500).send(errFactory.toJson(err, messages.db.theme.get));
        })
});

router.get('/:id', (req, res) => {

    db.getTheme(req.params.id)
        .then((theme) => res.status(200).send(new Theme(theme)))
        .catch((err) => {
            res.status(500).send(errFactory.toJson(err, messages.db.theme.get));
        });
});

router.post('/', (req, res) => {
    db.postTheme(new Theme(req.body))
        .then(db.getTheme)
        .then((theme) => res.status(200).send({
            message: messages.db.success.post,
            theme: new Theme(theme)
        }))
        .catch((err) => {
            console.log(err);
            res.status(500).send(errFactory.toJson(err, messages.db.theme.post))
        });
    });

module.exports = router;
