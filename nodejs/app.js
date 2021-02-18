const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const path = require('path');

const app = express();
const page = require('./routes');

const PORT = 3001;

app.use(morgan('dev'));
app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});
app.use(express.static(__dirname + '/public'));
// app.use(express.static(path.join(__dirname, 'views')));


app.use('/', page);

app.listen(PORT, (req, res) => {
    console.log(`connect`);
});