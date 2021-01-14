const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'training_db',
  dialect: 'mssql',
  host: 'localhost', // docker
  port: '1433', // docker
  username: 'sa', // docker
  password: 'ADMIN1!1!1!1root', // docker
  pool: {
    min: 0,
    max: 5,
    acquire: 5000,
    idle: 10000
  }
});

module.exports = { db: sequelize };
