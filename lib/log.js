const fs = require('fs');
const path = require('path');

function log(data) { //add callback, now all async methods
    const timeStampObj = {};
    timeStampObj.timestamp = new Date().toISOString();

    const fileName = path.join(__dirname, '../logs', timeStampObj.timestamp.replace(/:/g, '-') + '.txt');

    fs.writeFile(fileName, data, err => {
        if (err) return err;
    });
    return timeStampObj;

}

function logArray() {
    const timeStampArray = [];
    let dirPath = path.join(__dirname, '../logs');
    fs.readdir(dirPath, (err, files) => {
        if (err) return err;

    });

    console.log('timestamp array is', timeStampArray);
    return timeStampArray;
}

module.exports = {
    log,
    logArray
};
