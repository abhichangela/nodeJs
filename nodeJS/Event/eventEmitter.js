var http = require('http');
var fs = require('fs');
var rs = fs.createReadStream('./demo.txt');
rs.on('open',function(){
    console.log("Demo file is Open");
})