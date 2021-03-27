const { default: axios } = require("axios");
const db = require("../models");
const BitcoinPrice = db.BitcoinPrice;
const Op = db.Sequelize.Op;


exports.fetchPrice = (req, res) => {
    axios.get('https://api.bitfinex.com/v1/pubticker/btcusd').then((response) => {
      console.log(response.data);
      let latest_bitcoin_price = BitcoinPrice.create({
        mid: response.data.mid,
        bid: response.data.bid,
        ask: response.data.ask,
        last_price: response.data.last_price,
        low: response.data.low,
        high: response.data.high,
        volume: response.data.volume,
        timestamp: response.data.timestamp,
       });

      console.log(latest_bitcoin_price);
      // .then(() => User.findOrCreate({where: {username: 'fnord'}, defaults: {job: 'something else'}}))
      // .spread((user, created) => {
      //   console.log(user.get({
      //     plain: true
      //   }))
      //   console.log(created)
    }).catch((e) => {
      console.log(e)
    })

    res.json({ message: "latest updated" });
};

// Create and Save a new Tutorial
exports.create = (req,res) => {
  
};

// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  
};

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};