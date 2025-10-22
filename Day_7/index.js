const http = require('http');
const userData = require('./data');

http.createServer( (req, res) => {
    res.writeHead(200, {'Content-type': 'application/JSON'});
    res.write(userData);
    res.end();
}).listen(5000);