module.exports = app => {
    const bitcoin = require("../controllers/bitcoin.controller.js");
    const cron = require("node-cron");

    var router = require("express").Router();
    
    //Get Endpoint to query the Bitcoin Prices from our the Bitfinex website
    router.get("/save", bitcoin.saveCurrentPrice);

    //Get Endpoint to fetch the Bitcoin Prices from our Database
    router.get("/fetch", bitcoin.fetchPrice);

    // cron.schedule("* * * * *", bitcoin.saveCurrentPrice);
  
    app.use('/api/bitcoin', router);
  };