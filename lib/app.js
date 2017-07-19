const makeGreeting = require('./greeting');
const fact = require('./fact');
const url = require('url');
const log = require('./log');


function app(req, res) {
    let parsedUrl = url.parse(req.url, {
        parseQueryString: true
    });

    let thisUrl = req.url.split('/');
    let path = thisUrl[1];

    let newSalutation = parsedUrl.query.salutation;

    let findName = parsedUrl.pathname;
    let name = findName.split('/');


    if (newSalutation) {
        res.end(makeGreeting(name[2], newSalutation));
    }
    else if (req.method === 'GET' && path === 'greeting') {
        let name = thisUrl[2];
        let salutation = 'hello';
        res.end(makeGreeting(name, salutation));
    }
    else if (req.method === 'GET' && path === 'fact') {
        res.end(fact.getRandomFact());
    }
    else if (req.method === 'POST' && path === 'logs') {
        let body = '';

        req.on('data', data => {
            body += data;
        });

        req.on('end', () => {
            const obj = body;
            res.setHeader('Content-Type', 'application/json');
            const loggedObj = log.log(obj);
            res.end(JSON.stringify(loggedObj));
        });
    }
    else if (req.method === 'GET' && path === 'logs') {
        // console.log('request url is', req.url);
        // console.log('response is', res);
        // console.log('res.end', res.end());
        
    }
    else {
        res.statusCode = 404;
        res.end(`CANNOT ${req.method} /${path}`);
    }

}

module.exports = app;