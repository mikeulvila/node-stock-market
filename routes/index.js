'use strict'

const express = require('express');
const router = express.Router();

// require routes
const detail = require('./detail');
const home = require('./home');
const portfolio = require('./portfolio');
const quote = require('./quote');

// use routes
router.use(detail);
router.use(home);
router.use(portfolio);
router.use(quote);

module.exports = router;
