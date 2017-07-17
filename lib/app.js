const makeGreeting = require('./greeting');
const url = require('url');

function app(req, res) {
    let parsedUrl = url.parse(req.url, {
        parseQueryString: true
    });

    let newSalutation = parsedUrl.query.salutation;
    
    let findName = parsedUrl.pathname;
    let name = findName.split('/');

    let thisUrl = req.url.split('/');
    let path = thisUrl[1];



    if (newSalutation) {
        
        res.end(makeGreeting(name[2], newSalutation));
    }
    else if (req.method === 'GET' && path === 'greeting') {
        let name = thisUrl[2];
        let salutation = 'hello';
        res.end(makeGreeting(name, salutation));
    } else if (req.method === 'GET' && path === 'fact') {
    }
    else {
        res.statusCode = 404;
        res.end(`CANNOT ${req.method} /${path}`);
    }


}

module.exports = app;