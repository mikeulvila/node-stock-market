'use strict'
const express = require('express');
const router = express.Router();

// model

// controller
const ctrl = require('../controllers/portfolio.js');

/* GET portfolio page. */
router.get('/portfolio', ctrl.index);

module.exports = router;
