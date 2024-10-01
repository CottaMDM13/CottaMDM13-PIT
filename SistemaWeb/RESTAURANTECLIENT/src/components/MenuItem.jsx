import React from 'react';

const MenuItem = ({ item }) => {
  return (
    <div>
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Preço: ${item.price}</p>
      <button>Adicionar no Carrinho</button>
    </div>
  );
};

export default MenuItem;
