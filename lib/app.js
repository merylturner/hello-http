const makeGreeting = require('./greeting');

function app(req, res) {
    if(req.method === 'GET') {
        let url = req.url.split('/');
        let name = url[2];
        res.end(makeGreeting(name));
    }

}

module.exports = app;