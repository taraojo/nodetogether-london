//routes
// accepting a request and sending out a response
const express = require('express');
const app = express();

app.get('/hello', function (request, response) {
    console.log('request to /hello');
    response.send('Hello');
});

module.exports = app;