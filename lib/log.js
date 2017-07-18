const fs = require('fs');
// const path = require('path');


// module.exports = class Log {
//     constructor(root){
//         this.root = root;
//     }

//     save(object,callback) {
//         const id = new Date().toISOString;
//         object.id = id;

//         const fileName = path.join(this.root, id + '.txt');
//         console.log(fileName);

//         // fs.writeFile(fileName,)
//     }
// };

function log(req, res) {
    const fileName = new Date().toISOString() + '.txt';

    let body = req.body;

    fs.writeFile(fileName, body, err => {
        if(err) return callback(err);
        callback(null, body);
    });

    res.end();
}
module.exports = log;
