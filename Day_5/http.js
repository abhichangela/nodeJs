const http = require('http');

// http.createServer( ( req, res ) => {
//     res.write("Hello world!!");
//     res.end();
// }).listen(4500)

// OR

function test(req, res) {
    res.write("<h1>Hello world, How are you?</h1>");
    res.end();
}

http.createServer(test).listen(4500);