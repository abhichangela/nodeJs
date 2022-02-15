var http = require("http");
http.createServer(function(req, res){
    res.write("Hello nodemon server started");
    res.end();
}).listen(4000)