const assert = require('assert');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

describe('app', () => {
    const request = chai.request(app);
    
    it('says hello world', done => {
        request.get('/')
            .end((err, res) => {
                if(err) done(err);
                assert.equal(res.text,'hello world');
                done();
            });
    });
});