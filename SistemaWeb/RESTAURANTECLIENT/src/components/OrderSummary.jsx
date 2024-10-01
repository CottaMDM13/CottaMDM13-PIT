import React from 'react';

const MenuSummary = () => {
  return (
    <div className="menu-summary">
      <h2>Cardápio</h2>
      <ul>
        <li>
          <a href="#entradas">Entradas</a>
        </li>
        <li>
          <a href="#pratos-principais">Pratos Principais</a>
        </li>
        <li>
          <a href="#sobremesas">Sobremesas</a>
        </li>
        <li>
          <a href="#bebidas">Bebidas</a>
        </li>
        <li>
          <a href="#bebidas-alcoólicas">Bebidas</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuSummary;
