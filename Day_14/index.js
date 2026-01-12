const express = require('express');
const app = express();

app.get('', (req,res) => {
    console.log("This is request data", req.query.name);
    res.send(`Welcome ${req.query.name}!!!`);
})

app.listen(5000);


/* 
    To get request from client we use req query params as follow:
    http://localhost:5000/?name=Test
    So now in console it will return Test
*/