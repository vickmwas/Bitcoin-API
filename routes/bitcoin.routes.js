module.exports = app => {
    const bitcoin = require("../controllers/bitcoin.controller.js");
    const cron = require("node-cron");
    let shell = require("shelljs");

    var router = require("express").Router();
  
    // router.post("/", stats.create);
  
    // Retrieve all Tutorials
    router.get("/fetch", bitcoin.fetchPrice);

    cron.schedule("* * * * *", bitcoin.fetchPrice);
  
    app.use('/api/bitcoin', router);
  };