process.env.NODE_ENV = require('../config/db_test_config').NODE_ENV;

const { Theme } = require('../model/theme');
const db = require('../db/theme');

const mocha = require("mocha");
const describe = mocha.describe;

const chai = require('chai');
const should = chai.should();
const have = chai.have;
const chaiHttp= require('chai-http');
const index = require('../index');

const messages = require('../routes/messages');

chai.use(chaiHttp);

describe('Theme REST Testing', () => {
    before((done) => {
        db.getAllThemes()
            .then((themes) => {
                themes.forEach((theme) => {
                    db.deleteTheme(theme).then((theme) => console.log("===> DELETING theme_name : " + theme.themename))
                });
            })
            .catch((err) => {
                console.error("An error has occured while testing : " + err);
            })
            .finally(done);
    });

    describe('/GET theme', () => {
        it('should GET all the themes which are equal to 0', (done) => {
            chai.request(index)
                .get('/theme')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                })
        });
    });

    describe('/POST theme', () => {
        it('should POST one random theme with a blank json color', (done) => {
            let theme = new Theme({
                themename: "test",
                begindate: "2010-11-11",
                enddate: "2010-12-11",
                colors: {}
            });

            chai.request(index)
                .post(('/theme'))
                .send(theme)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql(messages.db.success.post);
                    res.body.theme.should.have.property('themename');
                    res.body.theme.should.have.property('begindate');
                    res.body.theme.should.have.property('enddate');
                    res.body.theme.should.have.property('colors');
                    done();
                })
        })
    })

});
