'use strict'
const request = require('request');

// model
const Stock = require('../models/stock.js');

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
      const result = JSON.parse(response.body);
      res.render('detail', {
        title: `${result.Symbol} Details`,
        name: result.Name,
        symbol: result.Symbol,
        price: result.LastPrice
      })
    }
  });
};

// GET STOCK DETAIL FROM DATABASE BY ID AND RENDER DETAIL.JADE
module.exports.getStock = (req, res) => {
  Stock.getStockById(req.params.id, function (err, stock) {
    if (err) throw err;

    res.render('detail', {
      title: `Your ${stock.symbol} Stock Details`,
      name: stock.name,
      symbol: stock.symbol,
      price: stock.price,
      quantity: stock.qty,
      id: stock._id
    });
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
    //create new Stock Schema
    const stock = new Stock();
    stock.name = result.Name;
    stock.price = result.LastPrice;
    stock.qty = buyQty;
    stock.symbol = result.Symbol;
    //ADD STOCK TO MONGO DATABASE
    Stock.addStock(stock, (err, stockdb) => {
      console.log('SAVED', stockdb);
      if (err) throw err;
      res.render('detail', {
        title: `Your ${stockdb.symbol} Stock Details`,
        name: stockdb.name,
        symbol: stockdb.symbol,
        price: stockdb.price,
        quantity: stockdb.qty,
        id: stockdb._id
      });
    });
  });
};














