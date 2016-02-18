'use strict'
const request = require('request');
const _ = require('lodash');

// require model
const Stock = require('../models/stock.js');

// render portfolio.jade
module.exports.index = (req, res) => {
  Stock.getStocks((err, stocks) => {
    if (err) throw err;

    // lodash .reduce for total stock value
    const totalStockValue = _.round(_.reduce(stocks, (sum, stock) => {
      return sum + (stock.price * stock.qty);
    }, 0), 2);

    res.render('portfolio', {
      title: 'Portfolio',
      stocks: stocks,
      total: totalStockValue
    });
  });
};
