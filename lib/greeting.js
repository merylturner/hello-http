function makeGreeting(name){
    if(name) {
        return 'hello ' + name;
    } else {
        return 'hello stranger';
    }
}

module.exports = makeGreeting;