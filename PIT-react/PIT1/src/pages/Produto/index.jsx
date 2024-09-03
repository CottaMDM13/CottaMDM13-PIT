import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import produtosData from "../../../public/produtos.json";
import NotFound from "../404";

export default function ProdutoPage() {
  const { id } = useParams();

 
  const produto = produtosData.find((prod) => prod.id === parseInt(id));

  if (!produto) {
    return <NotFound />;
  }

  
  const handleComprar = () => {
    const carrinho = JSON.parse(localStorage.getItem("carrinho")) || []; 
    const produtoExistente = carrinho.find((p) => p.id === produto.id);
    if (produtoExistente) { 
      produtoExistente.quantidade += 1;
    } else {
      carrinho.push({ ...produto, quantidade: 1 });
    }
    localStorage.setItem("carrinho", JSON.stringify(carrinho)); 
    alert("Produto adicionado ao carrinho!"); o
  };

  return (
    <>
      <Header />
      <main className="max-w-[1440px] mx-auto py-5">
        <article className="flex items-center justify-evenly">
          <img src={produto.img} alt={produto.nome} />

          <div className="space-y-4 w-5/12">  
            <h1 className="text-3xl">{produto.nome}</h1>
            <h3 className="text-3xl">R$ {produto.preco}</h3>
            <p className="">{produto.descricao}</p>
            <div>
              <h5>Postado por:</h5>
              <h5>Categoria: {produto.categoria}</h5>
            </div>

            <button
              className="bg-[#FF9800] p-5 text-white rounded shadow-lg transition-all hover:opacity-85"
              onClick={handleComprar} 
            >
              COMPRAR
            </button>
          </div>
        </article>
      </main>
    </>
  );
}
