import React, { useState, useEffect } from "react";
import Header from "../../components/Header";

function CarrinhoPage() {
  const [carrinho, setCarrinho] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const carrinhoSalvo = JSON.parse(localStorage.getItem("carrinho")) || [];
    setCarrinho(carrinhoSalvo);
    calcularTotal(carrinhoSalvo);
  }, []);

  const calcularTotal = (carrinhoAtual) => {
    if (!Array.isArray(carrinhoAtual) || carrinhoAtual.length === 0) {
      setTotal(0);
      return;
    }

    // Calcular o total multiplicando o preço pela quantidade
    const novoTotal = carrinhoAtual.reduce((acc, produto) => {
      const precoValido = parseFloat(produto.preco.replace("R$", "").replace(",", ".")) || 0;
      const quantidadeValida = parseInt(produto.quantidade) || 0;
      return acc + (precoValido * quantidadeValida);
    }, 0);

    setTotal(novoTotal.toFixed(2)); // Definindo o total com duas casas decimais
  };

  const removerProduto = (id) => {
    const novoCarrinho = carrinho.filter((produto) => produto.id !== id);
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho));
    calcularTotal(novoCarrinho); 
  };

  const atualizarQuantidade = (id, quantidade) => {
    const novoCarrinho = carrinho.map((produto) =>
      produto.id === id ? { ...produto, quantidade } : produto
    );
    setCarrinho(novoCarrinho);
    localStorage.setItem("carrinho", JSON.stringify(novoCarrinho)); 
    calcularTotal(novoCarrinho); 
  };

  return (
    <>
      <Header />
      <main className="py-5 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="pb-5 text-2xl font-semibold">Carrinho de Compras</h1>
        {carrinho.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {carrinho.map((produto) => (
                <div
                  key={produto.id}
                  className="flex flex-col bg-white rounded-lg shadow-lg overflow-hidden h-auto"
                >
                  <img
                    src={produto.img}
                    className="w-full h-48 object-cover"
                    alt={produto.nome}
                  />
                  <div className="p-4 flex flex-col justify-between flex-grow">
                    <div className="space-y-2">
                      <h2 className="text-lg font-bold">{produto.nome}</h2>
                      <p className="text-sm text-gray-600">{produto.descricao}</p>
                      <p className="text-lg font-semibold">Preço: R$ {produto.preco}</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-2">
                        <input
                          type="number"
                          value={produto.quantidade}
                          min="1"
                          className="border rounded w-16 text-center p-1"
                          onChange={(e) =>
                            atualizarQuantidade(produto.id, parseInt(e.target.value))
                          }
                        />
                      </div>
                      <button
                        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
                        onClick={() => removerProduto(produto.id)}
                      >
                        Remover
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-10 text-right">
              <h2 className="text-2xl font-semibold">Total a pagar: R$ {total}</h2>
            </div>
          </>
        ) : (
          <p className="text-center text-lg mt-10">Seu carrinho está vazio.</p>
        )}
      </main>
    </>
  );
}

export default CarrinhoPage;
