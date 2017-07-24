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
            log.log(obj, (err, timestamp) => {
                if (err) {

                }
                else {
                    res.end(JSON.stringify({timestamp: timestamp}));
                }
            });
        });
    }
    else if (req.method === 'GET' && path === 'logs') {
        log.logArray((err, files) => {
            if (err) {

            }
            else {
                res.end(JSON.stringify(files));

            }
        });
    }
    else {
        res.statusCode = 404;
        res.end(`CANNOT ${req.method} /${path}`);
    }

}

module.exports = app;