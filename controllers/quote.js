'use strict'
const request = require('request');

// render quote.jade
module.exports.index = (req, res) => {
  res.render('quote', { title: 'Quote' });
};

// api request to get Symbols
module.exports.getSymbol = (req, res) => {
  const symbolSearch = req.body.symbolSearch;
  const lookupSymbolAPI = 'http://dev.markitondemand.com/Api/v2/Lookup/json?input=' + symbolSearch;

  // api request
  request.get(lookupSymbolAPI, (err, response) => {
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


// const url = 'https://api.forecast.io/forecast/0a240dea0feab43866d24f9adb42399a/37.8267,-122.423';
//   request.get(url, (err, response, body) => {
//     if (err) throw err;
//     res.header('Access-Control-Allow-Origin', '*');
//     res.send(JSON.parse(body));
//   });
