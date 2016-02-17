const mongoose = require('mongoose');

// mongoose schema
const portfolioSchema = mongoose.Schema({
  symbol: String,
  name: String,
  price: Number,
  qty: Number,
  purchased_at: {
    type: Date,
    default: Date.now
  }
});

const Portfolio = module.exports = mongoose.model('portfolio', portfolioSchema);

//add Portfolio
module.exports.addStock = (portfolio, callback) => {
  // mongoose method .create
  Portfolio.create(portfolio, callback);
};
