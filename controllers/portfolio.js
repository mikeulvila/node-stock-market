'use strict'
const request = require('request');

// require model
const Stock = require('../models/stock.js');

// render portfolio.jade
module.exports.index = (req, res) => {
  Stock.getStocks((err, stocks) => {
    if (err) throw err;

    res.render('portfolio', {
      title: 'Portfolio',
      stocks: stocks
    });
  });
};
