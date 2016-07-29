//routes
// accepting a request and sending out a response
const express = require('express');
const eHandlebars = require('express-handlebars');
const motivations = require('motivations'); //array of statements
const pickOne = require('pick-one');

const app = express();

app.engine('handlebars', eHandlebars({
      defaultLayout: 'main',
      layoutsDir:'./app/views/layouts'
}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');

app.get('/', function (request, response) {
    var motivation = pickOne(motivations);
    response.render('motivation', { motivation: motivation });
});

module.exports = app;