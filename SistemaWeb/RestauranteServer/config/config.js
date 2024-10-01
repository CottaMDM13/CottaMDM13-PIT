// configurando o Sequelize
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('restaurante_db', 'root', '1q2w3e4r', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
