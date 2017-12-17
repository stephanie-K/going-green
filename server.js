/**
 * Created by ninie on 13/12/2017.
 */
// server.js
// load the things we need
var express = require('express');
var app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about_EN', function(req, res) {
    res.render('pages/about_EN');
});

app.get('/about_FR', function(req, res) {
    res.render('pages/about_FR');
});

// design page
app.get('/design', function(req, res) {
    res.render('pages/design');
});
// to serve statics files:
app.use(express.static('assets'))


app.listen(8080);
console.log('8080 youpi, ça commence');