'use strict'
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/quote', function(req, res, next) {
  res.render('quote', { title: 'You are now on the quotes page.' });
});

module.exports = router;
