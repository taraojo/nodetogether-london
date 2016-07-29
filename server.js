//SERVER ADDRESS - building a client server relationship
// check for heroku port and host values
const port = process.env.PORT || '3000';
const host = process.env.HOST || '0.0.0.0';
const Express = require('express');

const app = Express();

app.use(require('./app'));

//listening for requests at set port & host
app.listen(port, host);

console.log('Server running!');

//module.exports = app;
