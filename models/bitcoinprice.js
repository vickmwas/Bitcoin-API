'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BitcoinPrice extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  BitcoinPrice.init({
    mid: DataTypes.DOUBLE,
    bid: DataTypes.DOUBLE,
    ask: DataTypes.DOUBLE,
    last_price: DataTypes.DOUBLE,
    low: DataTypes.DOUBLE,
    high: DataTypes.DOUBLE,
    volume: DataTypes.DOUBLE,
    timestamp: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'BitcoinPrice',
  });
  return BitcoinPrice;
};