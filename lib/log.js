const fs = require('fs');
const path = require('path');

function log(req, res) {
    const timeStamp = new Date().toISOString();
    // console.log('timestamp is',timeStamp);
    const timeStampObj = { timestamp: `${timeStamp}`};
    console.log('timestamp OBJECT is', timeStampObj);
    const fileName = path.join(__dirname, '../logs', timeStamp.replace(/:/g, '-') + '.txt');
    
    // console.log('filename is', fileName);

    fs.writeFile(fileName, err => {
        if(err) return err;
        // callback(null, data);
        //data should be timestamp obj
        // return timestamp object???
    });

    res.end();
    
}
module.exports = log;
