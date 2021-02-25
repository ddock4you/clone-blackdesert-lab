const express = require('express');
const board = require('./board');

const router = express.Router();


router.get('/', (req, res) => {
    res.render('main');
});

router.use('/board', board);

router.get('/join', (req, res) => {
    res.render('join');
});

router.get('/login', (req, res) => {
    res.render('login');
});

module.exports = router;