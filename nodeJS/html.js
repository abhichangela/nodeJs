var http = require('http');
var page = `<input type='text'/> <br/>
<input type='text'/>
<input type='text'/> <br/>
<button type="submit">Submit</button>`
http.createServer(function(req,res){
    res.writeHead(200,{'content-type': "text/HTML"});
    res.write('<h1>Hello World</h1>');
    res.write(page);
    res.end();
}).listen(4000)