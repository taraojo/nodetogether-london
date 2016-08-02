//routes
// accepting a request and sending out a response
const express = require('express');
const eHandlebars = require('express-handlebars');
const motivations = require('motivations'); //array of statements
const pickOne = require('pick-one');

const app = express();

app.use(express.static('./app/public'));

app.engine('handlebars', eHandlebars({
      defaultLayout: 'main',
      layoutsDir:'./app/views/layouts'
}));

app.set('views', './app/views');
app.set('view engine', 'handlebars');

var catImages = [
    'http://grimaemilia.neocities.org/images/cat%20in%20space.jpg',
    'http://www.winterbluemusic.com/wp-content/uploads/2016/05/Space-Cat-Wallpaper.jpg',
    'https://i.ytimg.com/vi/HWWWE0ygidc/maxresdefault.jpg',
    'http://www.ngepluk.com/p/funny-space-cat-wallpaper-for-android-t0q.jpg'
];

app.get('/', function (request, response) {
    var motivation = pickOne(motivations);
    response.render('motivation', { motivation: motivation, image: pickOne(catImages) });
});

module.exports = app;