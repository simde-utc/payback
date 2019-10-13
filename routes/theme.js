const express = require('express');
const { Theme } = require('../model/theme');
const db = require('../db/theme');
const { Colors } = require('../model/colors');
const router = express.Router();

router.get('/:id', (req, res) => {
//TODO à alleger : c'est possible mais j'ai la flemme d'opti
    db.getTheme(req.params.id)
        .then((resultSet) => {
            console.log(resultSet.rows[0]);
            let t = new Theme(resultSet.rows[0]);

            t.getLightColors()
                .then((lightResultSet) => {
                    t.lightColors = new Colors(lightResultSet.rows[0]);

                    t.getDarkColors()
                        .then((darkResultSet) => {

                            t.darkColors = new Colors(darkResultSet.rows[0]);
                            res.status(200).send(t.toJSON());

                        })
                        .catch((err) => {
                            console.log(err);
                        })
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
});

router.post('/:id', (req, res) => {
    res.send("lol");
});

module.exports = router;