// const path = require('path');
// const mkdirp = require('mkdirp');
// const log = require('./log');

// module.exports = {
//     rootDir: __dirname,
//     createTable(table, callback) {
//         const dir = path.join(this.rootDir, table);
//         console.log(dir);
//         mkdirp(dir, err => {
//             if (err) return callback(err);
//             // const log = new Log(dir);
//             callback(null, log);
//         });
//     }
// };