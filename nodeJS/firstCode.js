var http = require('http');
http.createServer(function(req, res){
    res.write("Hello from Node JS server");
    res.end();
}).listen(5000)