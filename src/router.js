const express = require('express')

const database = require('./database.js')

const router = express.Router();

router.all('/index', (req, res) => {
    res.status(200);
    res.render('index', {title:"Testtitle"});
});

router.all('/', (req, res)=> {
    // res.status(200)
    res.send("You are welcome where")
})
exports.router = router