// models/Order.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const User = require('./User');

const Order = sequelize.define('Order', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('pending', 'completed', 'cancelled'),
    defaultValue: 'pending',
  }
}, {
  timestamps: true,
});

module.exports = Order;
