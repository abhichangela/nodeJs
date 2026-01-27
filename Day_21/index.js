const express = require('express');
const filterData = require('./middleware');
const app = express();

app.get('/', (req, res) => {
    res.send("This is home page");
})

app.get('/about', filterData, (req, res) => {
    res.send("This is about us page");
})

app.get('/contact', (req, res) => {
    res.send("This is contact us page");
})

app.listen(5000);