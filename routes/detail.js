'use strict'
const express = require('express');
const router = express.Router();

// model

// controller
const ctrl = require('../controllers/detail.js');

// GET detail page.
router.get('/detail/:symbol', ctrl.index);

// POST to portfolio
router.post('/detail/buy/:symbol', ctrl.buyStock);

module.exports = router;
