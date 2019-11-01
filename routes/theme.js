const express = require('express');
const db = require('../db/theme');
const router = express.Router();

const { Theme } = require('../model/theme');
const errMessages = require('../errorsMessages');
const errfactory = require('./error_messages_factory');

router.get('/:id', (req, res) => {
//TODO à alleger : c'est possible mais j'ai la flemme d'opti

    db.getTheme(req.params.id)
        .then((resultSet) => {
            let t = new Theme(resultSet.rows[0]);
            res.status(200).send(t.toJSON());
        }).catch((err) => {
            res.status(500).send(errfactory.errorMessageToJson(err, errMessages.db.theme));
        });
});

router.post('/:id', (req, res) => {
    res.send("lol");
});

module.exports = router;