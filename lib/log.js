const fs = require('fs');
const path = require('path');

function log(object) {
    const timeStampArray = [];
    object.id = new Date().toISOString();

    const timeStampObj = {};
    timeStampObj.timestamp = object.id;
    timeStampArray.push(timeStampObj);
    console.log('timestamp array is', timeStampArray);
    
    const fileName = path.join(__dirname, '../logs', object.id.replace(/:/g, '-') + '.txt');

    fs.writeFile(fileName, JSON.stringify(timeStampObj), err => {
        if(err) return err;
    });
    return timeStampObj;
    
}

module.exports = log;
