const express = require('express');
const app = express();

const filter = (req, res, next) => {
    if(!req.query.age){
        res.send("Please provide age")
    } else if(req.query.age < 18) {
        res.send("User must be above 18 years old to acesss this page");
    } else {
        next();
    }
}

app.use(filter);


app.get('/', (req, res) => {
    res.send("This is home page");
})

app.get('/about', (req, res) => {
    res.send("This is about us page")
})

app.listen(5000);