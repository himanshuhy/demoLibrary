const express = require('express')

const router = express.Router();

router.all('/index', (req, res) => {
    res.status(200);
    res.render('index', {title:"Testtitle"});
});

router.all('/', (req, res)=> {
    console.log(req.range(1000))
    // res.status(200)
    // setTimeout(()=> {
    //     res.send('Hello World!')
    // }, 200)
    res.sendFile('test.txt', {
        root: '/Users/yhimansh/Documents/demoLibrary',
        acceptRanges: true
    })
})

exports.router = router