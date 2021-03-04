const express = require('express');
const nunjucks = require('nunjucks');
const morgan = require('morgan');
const path = require('path');
const {
    sequelize
} = require('./models');

const app = express();
const page = require('./routes');

const PORT = 3001;

app.set('view engine', 'html');
nunjucks.configure('views', {
    express: app,
    watch: true
});
sequelize.sync({
    force: false
}).then(() => {
    console.log('database connected');
}).catch((err) => {
    console.error(err);
});
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

app.use('/', page);

// app.use((err, req, res, next) => {
//     res.locals.message = err.message;
//     res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
//     res.status(err.status || 500);
//     // res.render('error');
//     res.send('');
// });

app.listen(PORT, (req, res) => {
    console.log(`connect`);
});