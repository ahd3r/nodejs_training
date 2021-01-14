const Sequelize = require('sequelize');
const { db } = require('../helper/database');
const { Computer } = require('./Comp');

const User = db.define('Users', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  gender: {
    type: Sequelize.ENUM('male', 'female'),
    allowNull: false
  }
});

User.hasOne(Computer, { onDelete: 'CASCADE', foreignKey: { allowNull: false } });

module.exports = { User };
