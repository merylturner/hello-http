const makeGreeting = require('./greeting');

function app(req, res) {
    let url = req.url.split('/');
    let path = url[1];

    if(req.method === 'GET' && path === 'greeting') {
        let name = url[2];
        res.end(makeGreeting(name, 'hola'));
    } else if(req.method === 'GET' && path === 'fact') {
        
    } else {
        res.statusCode = 404;
        res.end(`CANNOT ${req.method} /${path}`);
    }


}

module.exports = app;