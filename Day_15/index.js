const express = require('express');
const app = express();

app.get('',(req, res) => {
    res.send(`
        <h1>Hello</h1>
        <a href="/about">Go to about us page</a>
        </br> </br>
        <a href="/help">Go to help page</a>`);
})

app.get('/about', (req, res) => {
    res.send(`
        <input type="textarea" placeholder="Please enter name" value="${req.query.test}" />
        <button>Click Me</button>
        `)
})

app.get('/help', (req, res) => {
    res.send(`
        [{
            'name': 'Test',
            'email': 'test@gmail.com'
        }]
        `)
})

app.listen(5000);