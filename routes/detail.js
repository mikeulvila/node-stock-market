'use strict'
const express = require('express');
const router = express.Router();

// model

// controller
const ctrl = require('../controllers/detail.js');

/* GET detail page. */
router.get('/detail/:symbol', ctrl.index);



module.exports = router;
