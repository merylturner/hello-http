const fs = require('fs');
const path = require('path');

function log(req, res) {
    const timeStamp = new Date().toISOString();
    console.log('timestamp is',timeStamp);
    
    const fileName = path.join(__dirname, '../logs', timeStamp.replace(/:/g, '-') + '.txt');
    
    console.log('filename is', fileName);

    // let body = req.body;
    // console.log('body is',body);

    fs.writeFile(fileName, err => {
        if(err) return err;
        // callback(null, body);
    });

    res.end();
}
module.exports = log;
