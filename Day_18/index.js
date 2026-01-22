const express = require('express');
const app = express();

app.set('view engine', 'ejs');

app.get('/profile', (req, res) => {
    const user = {
        name: 'Test',
        email: 'test@gmail.com',
        city: 'Delhi'
    }
    res.render('profile', {user});
})

app.listen(5000);

/* 
To make any dynamic website page we need to use ejs package.
To use ejs we need to add 'app.set('view engine', 'ejs');'
We need to create 'views' folder in which our file will render where file name will have extension
with .ejs
To display data we need to use <%= %>
*/ 
