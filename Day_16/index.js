const express = require('express');
const app = express();
const path = require('path');

const publicPath = path.join(__dirname, "public");
console.log(publicPath);

app.use(express.static(publicPath));

app.listen(5000);

/* 
Now we can excess home.html using below link:
http://localhost:5000/home.html

If we add index.html then it can be load at root level
http://localhost:5000
*/