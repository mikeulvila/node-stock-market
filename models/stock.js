const mongoose = require('mongoose');

// mongoose schema
const stockSchema = mongoose.Schema({
  symbol: String,
  name: String,
  price: Number,
  qty: Number,
  purchased_at: {
    type: Date,
    default: Date.now
  }
});

const Stock = module.exports = mongoose.model('stocks', stockSchema);

// add stock to stock database
module.exports.addStock = (stock, callback) => {
  // mongoose method .create
  Stock.create(stock, callback);
};

// Get all stocks from stock database
module.exports.getStocks = function (query, callback) {
  Stock.find(query, callback).sort({symbol: 1});
};

// Get stock by id
module.exports.getStockById = (id, callback) => {
  // mongoose method .findById
  Stock.findById(id, callback);
};

// update quantity
module.exports.updateStock = function (query, update, options, callback) {
  // mongoose method .findOneAndUpdate
  Stock.findOneAndUpdate(query, update, options, callback);
};
