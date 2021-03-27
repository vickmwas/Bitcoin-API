'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BitcoinPrices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BitcoinPrices');
  }
};