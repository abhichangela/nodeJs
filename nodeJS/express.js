const express = require('express');
const  data = express();
data.get('/abc',function(req, res){
    res.send("Hello Express JS");
}).listen(4000);