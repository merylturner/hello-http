const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const assert = chai.assert;
const fsExtra = require('fs-extra');
const path = require('path');


const app = require('../lib/app');

describe('post files to /logs', () => {
    const request = chai.request(app);

    before(() => {
        fsExtra.emptyDir(path.join(__dirname, '../logs'), err => {
            if (err) return err;
            console.log('files have been deleted');
        });
    });

    it('posts file to logs', done => {
        const dataObj = { name: 'meryl', email: 'meryl@meryl.com' };
        request.post('/logs')
            .send(dataObj)
            .end((err, res) => {
                if (err) done(err);
                assert.include(res.text, 'timestamp');
                done();
            });
    });
});

//want to check the length of logs? assert.equal(array.length, 1)
//test content of GET for single log after POST

// describe('gets files from /log', () => {
//     const request = chai.request(app);
//     // const dataObj2 = { name: 'jane', email: 'jane@jane.com' };

//     // request.post('/logs')
//     //     .send(dataObj2)
//     //     .end((err, res) => {
//     //         if (err) done(err);
//     //     });
//     it('GET /logs', done => {
//         request.get('/logs')
//             .end((err, res) => {
//                 // console.log('res.text is', res.text);
//                 if (err) done(err);
//                 assert.equal(1+1, 3);
//                 done();
//             });
//     });
// });