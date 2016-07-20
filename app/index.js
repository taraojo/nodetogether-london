//routes
// accepting a request and sending out a response
const express = require('express');
const motivations = require('motivations'); //array of statements
const pickOne = require('pick-one');


const app = express();

app.get('/hello', function (request, response) {
    console.log('request to /hello');
    var motivator = pickOne(motivations);
    response.send(motivator);
});

module.exports = app;