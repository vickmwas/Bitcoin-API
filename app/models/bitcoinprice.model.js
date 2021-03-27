module.exports = (sequelize, Sequelize) => {
    const BitcoinPrice  = sequelize.define("bitcoin_data", {
      id: {
        type: Sequelize.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement:true,
        allowNull:false,
      },
      mid: {
        type: Sequelize.DOUBLE,
        allowNull:false,
      },
      bid: {
        type: Sequelize.DOUBLE,
        allowNull:false,
      },
      ask: {
        type: Sequelize.DOUBLE,
        allowNull:false,
      },
      last_price: {
        type: Sequelize.DOUBLE,
        allowNull:false,
      },
      low: {
        type: Sequelize.DOUBLE,
        allowNull:false,
      },
      high: {
        type: Sequelize.DOUBLE,
        allowNull:false,
      },
      volume: {
        type: Sequelize.DOUBLE,
        allowNull:false,
      },
      timestamp: {
        type: Sequelize.STRING,
        allowNull:false,
      },
    }, {
        timestamps: true
    });
  
    return BitcoinPrice;
  };