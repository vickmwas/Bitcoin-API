const { default: axios } = require("axios");
const db = require("../models");
const BitcoinPrice = db.BitcoinPrice;

exports.saveCurrentPrice = (req, res) => {
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

    }).catch((e) => {
      console.log(e);
    })

    res.json({ message: "latest updated" });
};

// Fetch Price
exports.fetchPrice = (req,res) => {
 let latest_prices = BitcoinPrice.findAll({
    limit: 1,
    order: [ [ 'createdAt', 'DESC' ]]
  }).then(function(entries){
    let response = {
      "current_price" : entries[0],
      "previous_price": entries[1]
    }
    res.json(entries[0]);
  }); 
};
