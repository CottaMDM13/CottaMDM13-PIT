// sync.js
const sequelize = require('./config/config');
const User = require('./models/User');
const Menu = require('./models/Menu');
const Order = require('./models/Order');
const OrderItem = require('./models/OrderItem');

sequelize.sync({ force: true }).then(() => {
  console.log('Banco de dados sincronizado.');
}).catch((error) => {
  console.error('Erro ao sincronizar banco de dados:', error);
});
