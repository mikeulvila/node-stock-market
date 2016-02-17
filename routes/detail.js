'use strict'
const express = require('express');
const router = express.Router();

// model

// controller
const ctrl = require('../controllers/detail.js');

// GET detail page from api with symbol
router.get('/detail/:symbol', ctrl.index);

// GET detail page from database with id
router.get('/detail/id/:id', ctrl.getStock);

// POST to portfolio
router.post('/detail/buy/:symbol', ctrl.buyStock);

module.exports = router;
