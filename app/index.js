//routes
// accepting a request and sending out a response
const express = require('express');
const motivations = require('motivations'); //array of statements
const pickOne = require('pick-one');


const app = express();

app.get('/', function (request, response) {
    var motivator = pickOne(motivations);
    response.send(motivator);
});

module.exports = app;