const express = require('express');
const app = express();

app.get('',(req, res) => {
    res.send("Home page");
})

app.get('/service', (req, res) => {
    res.send("Service Page");
})

app.listen(5000);