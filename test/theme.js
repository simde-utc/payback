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

chai.use(chaiHttp);

describe('Theme', () => {
    beforeEach((done) => {
        db.deleteAll()
            .then((values) => {
                done();
            })
            .catch((err) => {
                console.log("An error has occured while testing : " + err)
            })
    });

    describe('/GET theme', () => {
        it('it should GET all the themes', (done) => {
            chai.request(index)
                .get('/theme')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });

});
