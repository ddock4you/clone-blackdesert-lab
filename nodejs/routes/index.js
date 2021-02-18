const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/freeboard', (req, res) => {
    res.render('board/free');
});

module.exports = router;