const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('/greeting', () => {
    const request = chai.request(app);
    
    it('returns greeting with no name', done => {
        request.get('/greeting')
            .end((err, res) => {
                if(err) done(err);
                assert.equal(res.text,'hello stranger');
                done();
            });
    });
    it('returns greeting with name', done => {
        request.get('/greeting/joe')
            .end((err, res) => {
                if(err) done(err);
                assert.equal(res.text,'hello joe');
                done();
            });
    });
});