const fs = require('fs');
const path = require('path');

function log(object) {
    object.id = new Date().toISOString();
    // console.log('timestamp is',timeStamp);
    const timeStampObj = {};
    timeStampObj.id = object.id;
    
    const fileName = path.join(__dirname, '../logs', object.id.replace(/:/g, '-') + '.txt');

    fs.writeFile(fileName, JSON.stringify(timeStampObj), err => {
        if(err) return err;
    });
    return timeStampObj;
    
}
module.exports = log;
