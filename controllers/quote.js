'use strict'
const request = require('request');

// render quote.jade
module.exports.index = (req, res) => {
  res.render('quote', { title: 'Quote' });
};

// api request to get Symbols
module.exports.getSymbol = (req, res) => {
  const symbolSearch = req.body.symbolSearch;
  const lookupAPI = 'http://dev.markitondemand.com/Api/v2/Lookup/json?input=' + symbolSearch;

  // api request
  request.get(lookupAPI, (err, response) => {
    if (err) {
      res.render('quote', {
        title: 'Oops!',
        errors: err
      })
    } else {
      res.render('quote', {
        title: 'Search Results',
        results: JSON.parse(response.body)
      })
    }
  });
};
