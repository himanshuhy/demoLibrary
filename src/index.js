const express = require("express")
const logger = require('morgan')
const path = require('path')
const router = require("./router.js")
const createError = require("http-errors")

let app = express();
app.set('views', path.join('.', 'views'));
app.set('view engine', 'pug');

app.use(logger("dev"));
app.use(express.json());
app.use(express.static(path.join('.', 'public')));

//Routers
app.use(router.router);

//default 404 middleware for unsupported pages
app.use((req, res, next) => {
    next(createError(404));
});

app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
    // render the error page
    res.status(err.status || 500);
    res.render('error');
    console.log("request went to the default route for unsupported pages");
});
app.listen(3000, () => {
    console.log("Server started");
});
