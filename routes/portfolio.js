'use strict'
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/portfolio', function(req, res, next) {
  res.render('portfolio', { title: 'You are now on the portfolio page.' });
});

module.exports = router;
