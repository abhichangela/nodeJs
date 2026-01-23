const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user = {
        name: 'Test',
        email: 'test@gmail.com',
        city: 'Delhi',
        skills: ['PHP', 'C++', 'Node JS']
    }
    res.render('profile', {user});
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.listen(5000)