const fs = require('fs');
const path = require('path');

function log(data,callback) {

    let timestamp = new Date().toISOString();

    const fileName = path.join(__dirname, '../logs', timestamp.replace(/:/g, '-') + '.txt');

    fs.writeFile(fileName, data, err => {
        if (err) return callback(err);
        callback(null, timestamp);
    });

}

function logArray(callback) {
    let dirPath = path.join(__dirname, '../logs');
    fs.readdir(dirPath, (err,files) => {
        if (err) return callback(err);
        callback(null,files);
    });

}

function findByTimestamp(timestamp,callback){
    const fileName = path.join(__dirname, '../logs', timestamp.replace(/-/g, ':') + '.txt');
    fs.readFile(fileName,(err, data) => {
        if(err) return callback(err);
        callback(null, data);
    });
}

module.exports = {
    log,
    logArray,
    findByTimestamp
};
