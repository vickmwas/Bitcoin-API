module.exports = app => {
    const bitcoin = require("../controllers/bitcoin.controller.js");
    const cron = require("node-cron");

    var router = require("express").Router();
    
    router.get("/fetch", bitcoin.fetchPrice);
    router.get("/save", bitcoin.saveCurrentPrice);

    // cron.schedule("* * * * *", bitcoin.saveCurrentPrice);
  
    app.use('/api/bitcoin', router);
  };