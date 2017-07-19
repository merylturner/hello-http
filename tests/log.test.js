const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const fsExtra = require('fs-extra');
const path = require('path');

// const log = require('../lib/log');
const app = require('../lib/app');

describe('/logs', () => {
    const request = chai.request(app);

    before(() => {
        fsExtra.emptyDir(path.join(__dirname, '../logs'), err => {
            if (err) return err;
            console.log('files have been deleted');
        });
    });

    it('posts file to logs', done => {
        const dataObj = { name: 'meryl', email: 'meryl@meryl.com'};
        request.post('/logs')
            // .setHeader('Content-Type', 'application/json')
            .send(dataObj)
            .end((err,res) => {
                if (err) done(err);
                assert.include(res.text, 'timestamp');
                done();
            });
    });
});