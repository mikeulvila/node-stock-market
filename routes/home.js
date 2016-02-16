'use strict'
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Rock The Stock you...' });
});

module.exports = router;
