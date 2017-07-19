const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
// const app = require('../lib/app');

const log = require('../lib/log');

describe('/logs', () => {
    const request = chai.request(log);

    it('posts file to logs', done => {
        request.post('/log')
            // .setHeader('Content-Type', 'application/json')
            .send('hey')
            .end((err,res) => {
                if (err) done(err);
                assert.equal(res.text,'hey');
                //response should be {timeStampObj}
                done();
            });
    });
});