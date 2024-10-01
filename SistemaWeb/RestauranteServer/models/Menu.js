// models/Menu.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Menu = sequelize.define('Menu', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING,
  },
}, {
  timestamps: true,
});

module.exports = Menu;
