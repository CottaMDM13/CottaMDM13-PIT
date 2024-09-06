import Header from "../../components/Header";
import Produtos from "../../components/Produtos";
import { useState, useEffect } from "react";

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    fetch("/produtos.json")
      .then((res) => res.json())
      .then((data) => setProdutos(data));
  }, []);

  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto flex items-center justify-center gap-7 flex-wrap py-5">
        {produtos.map((produto) => (
          <Produtos
            key={produto.id}
            id={produto.id}
            nome={produto.nome}
            img={produto.img}
            descricao={produto.descricao}
          />
        ))}
      </main>
    </>
  );
}
