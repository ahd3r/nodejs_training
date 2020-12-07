const Sequelize = require('sequelize');
const { db } = require('../helper/database');

const Computer = db.define('Computer', {
  number: {
    type: Sequelize.STRING,
    allowNull: false
  },
  type: {
    type: Sequelize.ENUM('develop', 'testing', 'hosting'),
    allowNull: false
  }
});

module.exports = { Computer };
