// const fs = require('fs');
// const path = require('path');

module.exports = class Log {
    constructor(root) {
        this.root = root;
    }
    save() {
        console.log('this.root is', this.root);
    }
};
