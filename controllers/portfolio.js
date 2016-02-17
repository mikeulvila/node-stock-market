'use strict'
const request = require('request');

// render portfolio.jade
module.exports.index = (req, res) => {
  res.render('portfolio', { title: 'Portfolio' });
};
