const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const fsExtra = require('fs-extra');
const path = require('path');


const app = require('../lib/app');

describe('/logs', () => {
    const request = chai.request(app);
    let timestamp = null;

    before(() => {
        fsExtra.emptyDir(path.join(__dirname, '../logs'), err => {
            if (err) return err;
            console.log('files have been deleted');
        });
    });

    it('posts file to logs', done => {
        const data = { name: 'meryl', email: 'meryl@meryl.com'};
        request.post('/logs')
            .send(data)
            .end((err, res) => {
                if (err) done(err);
                assert.ok(res.body);
                let responseObj = JSON.parse(res.text);
                assert.equal(responseObj.hasOwnProperty('timestamp'), true);
                timestamp = responseObj.timestamp;
                done();
            });
    });
    
    it('GET /logs', done => {
        request.get('/logs')
            .end((err, res) => {
                if (err) done(err);
                let logArray = JSON.parse(res.text);
                assert.equal(logArray.length, 1);
                done();
            }); 
    });

    it('GET /logs by id', done => {
        request.get(`/logs/${timestamp}`)
            .end((err, res) => {
                if(err) done(err);
                let logId = JSON.parse(res.text);
                assert.deepEqual(logId, { name: 'meryl', email: 'meryl@meryl.com'});
                done();
            });
    });
});
