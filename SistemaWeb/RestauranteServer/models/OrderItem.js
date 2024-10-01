// models/OrderItem.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const Order = require('./Order');
const Menu = require('./Menu');

const OrderItem = sequelize.define('OrderItem', {
  orderId: {
    type: DataTypes.INTEGER,
    references: {
      model: Order,
      key: 'id',
    },
  },
  menuItemId: {
    type: DataTypes.INTEGER,
    references: {
      model: Menu,
      key: 'id',
    },
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  }
}, {
  timestamps: true,
});

module.exports = OrderItem;
