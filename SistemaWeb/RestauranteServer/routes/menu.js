// routes/menu.js
const express = require('express');
const Menu = require('../models/Menu');
const router = express.Router();

// Obter itens do menu
router.get('/', async (req, res) => {
  try {
    const menuItems = await Menu.findAll();
    res.json(menuItems);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao obter itens do menu' });
  }
});

// Adicionar item ao menu (somente admin)
router.post('/', async (req, res) => {
  try {
    const { name, description, price, category } = req.body;
    const menuItem = await Menu.create({ name, description, price, category });
    res.status(201).json(menuItem);
  } catch (error) {
    res.status(500).json({ error: 'Erro ao adicionar item ao menu' });
  }
});

module.exports = router;
