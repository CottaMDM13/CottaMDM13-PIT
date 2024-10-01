// routes/orders.js
const express = require('express');
const Order = require('../models/Order');
const OrderItem = require('../models/OrderItem');
const router = express.Router();

// Criar novo pedido
router.post('/', async (req, res) => {
  try {
    const { userId, items } = req.body;  // `items` é uma lista de { menuItemId, quantity }
    let total = 0;

    // Calcular o total e criar o pedido
    items.forEach(item => {
      total += item.price * item.quantity;
    });

    const order = await Order.create({ userId, total });

    // Criar os itens do pedido
    items.forEach(async (item) => {
      await OrderItem.create({
        orderId: order.id,
        menuItemId: item.menuItemId,
        quantity: item.quantity,
        price: item.price,
      });
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao criar pedido' });
  }
});

module.exports = router;
