'use strict'

const express = require('express');
const router = express.Router();

// require routes
const home = require('./home');
const portfolio = require('./portfolio');
const quote = require('./quote');

// use routes
router.use(home);
router.use(portfolio);
router.use(quote);

module.exports = router;
