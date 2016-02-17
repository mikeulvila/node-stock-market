'use strict'
const request = require('request');

// model
const Portfolio = require('../models/portfolio.js');

// variables
const url = 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=';

// GET STOCK DETAIL AND RENDER DETAIL.JADE
module.exports.index = (req, res) => {
  const symbol = req.params.symbol;
  const stockQuoteAPI = url + symbol;
  // api request
  request.get(stockQuoteAPI, (err, response) => {
    if (err) {
      res.render('quote', {
        title: 'Oops!',
        errors: err
      })
    } else {
      res.render('detail', {
        title: 'Detail',
        result: JSON.parse(response.body)
      })
    }
  });
};

// BUY STOCK
module.exports.buyStock = (req, res) => {
  const buyQty = req.body.buyQty;
  const symbol = req.params.symbol;
  const stockQuoteAPI = url + symbol;
  // api request
  request.get(stockQuoteAPI, (err, response) => {
    if (err) throw err;
    const result = JSON.parse(response.body);
    const stock = new Portfolio();
    stock.symbol = result.Symbol;
    stock.name = result.Name;
    stock.price = result.LastPrice;
    stock.qty = buyQty;
    //ADD STOCK TO MONGO DATABASE
    Portfolio.addStock(stock, (err, stockdb) => {
      if (err) throw err;
      console.log('STOCK FROM DB: ', stockdb);
      res.render('detail', {
        title: 'Sucessful buy',
        result: result
      });

    });


  });

};














