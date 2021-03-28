const { default: axios } = require("axios");
const db = require("../models");
const BitcoinPrice = db.BitcoinPrice;

exports.saveCurrentPrice = (req, res) => {

   
    axios.get('https://api.bitfinex.com/v1/pubticker/btcusd').then((response) => {
      console.log(response.data);

      //fetch the price details from the response, and populate the Bitcoin Price model, and save to the database
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

       res.json({ message: "bitcoin price saved succesfully" });
       
    }).catch((e) => {
      return res.status(400).send({ 
        code: 400,
        message: "error in retrieving bitcoin prices" });
    })

    
};

// Fetch Price
exports.fetchPrice = (req,res) => {
 let latest_prices = BitcoinPrice.findAll({
    limit: 2,
    order: [ [ 'createdAt', 'DESC' ]]
  }).then(function(entries){
    let response = {
      "current_price" : entries[0],
      "previous_price": entries[1]
    }
    res.json(response);
  }); 
};
