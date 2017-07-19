const fs = require('fs');
const path = require('path');

function log(data) {
    const timeStampObj = {};
    timeStampObj.timestamp = new Date().toISOString();

    const fileName = path.join(__dirname, '../logs', timeStampObj.timestamp.replace(/:/g, '-') + '.txt');

    fs.writeFile(fileName, data, err => {
        if (err) return err;
    });
    return timeStampObj;

}

function logArray(object) {
    const timeStampArray = [];
    timeStampArray.push(object);

    console.log('timestamp array is', timeStampArray);
    return timeStampArray;
}

module.exports = {
    log,
    logArray
};
