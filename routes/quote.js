'use strict'
const express = require('express');
const router = express.Router();

// model

// controller
const ctrl = require('../controllers/quote.js');


/* GET home page. */
router.get('/quote', ctrl.index);

// POST request for Symbol
router.post('/quote', ctrl.getSymbol);


module.exports = router;
