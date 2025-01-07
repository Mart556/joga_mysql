const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

app.use(express.static(path.join(__dirname, 'views')));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts'
}));

app.use(express.urlencoded({ extended: true }));

module.exports = app;