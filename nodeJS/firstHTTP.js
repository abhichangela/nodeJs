var http = require('http');
var data = [
    { name: "Abhi", age: 26, gender: "male"},
    { name: "Peter", age: 10, gender: "male"},
    { name: "Pooja", age: 25, gender: "female"}
]
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'application\json'})
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000)