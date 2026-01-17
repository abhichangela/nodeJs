const express = require('express');
const app = express();
const path = require('path');

const publicpath = path.join(__dirname, 'public');
console.log(publicpath);

app.get('', (req, res) => {
    res.sendFile(`${publicpath}/home.html`)
})

app.get('/about', (req, res) => {
    res.sendFile(`${publicpath}/about.html`)
})

app.get('/pagenotfound', (req, res) => {
    res.sendFile(`${publicpath}/page.html`)
})

// app.get('*', (req, res) => {
//     res.sendFile(`${publicpath}/page.html`)
// })

app.get(/.*/, (req, res) => {
    res.sendFile(path.join(publicpath, 'page.html'));
});

app.listen(5000);

/*
To remove .html from URL we need to use sendFile with proper path of file.
If wrong URL is entered then to give page not found we need to use * as path & proper html page path.
For express 5.x.x version you need to use '/.* /' expressions as regular expressions has been changed now
*/