'use strict'
const request = require('request');

// render detail.jade
module.exports.index = (req, res) => {
  const symbol = req.params.symbol;
  const stockQuoteAPI = 'http://dev.markitondemand.com/Api/v2/Quote/json?symbol=' + symbol;

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


