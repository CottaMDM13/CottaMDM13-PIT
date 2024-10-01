// index.js
const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/orders');
const sequelize = require('./config/config');
const User = require('./models/User');
const Menu = require('./models/Menu');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));

sequelize.sync({ force: true }).then(() => {
    console.log('Banco de dados sincronizado.');
  }).catch((error) => {
    console.error('Erro ao sincronizar banco de dados:', error);
  });
  