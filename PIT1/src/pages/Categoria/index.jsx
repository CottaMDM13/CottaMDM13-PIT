import { useParams } from "react-router-dom";
import Header from "../../components/Header";
import produtosData from "../../../public/produtos.json";

export default function CategoriaPage() {
  const { id } = useParams();

  const produtosFiltrados = produtosData.filter(
    (produto) => produto.categoria === id
  );

  return (
    <>
      <Header />
      <main className="py-5 max-w-[1440px] mx-auto">
        <h1 className="pb-5 text-2xl">Categoria: {id}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {produtosFiltrados.length > 0 ? (
            produtosFiltrados.map((produto) => (
              <div
                key={produto.id}
                className="flex flex-col w-[400px] h-[500px] shadow-2xl relative"
              >
                <img
                  src={produto.img}
                  className="w-full h-[80%]"
                  alt={produto.nome}
                />
                <div className="p-5 w-full h-[20%] space-y-2">
                  <h1 className="text-2xl">{produto.nome}</h1>
                  <p className="text-sm">{produto.descricao}</p>
                </div>
              </div>
            ))
          ) : (
            <p>Nenhum produto encontrado para esta categoria.</p>
          )}
        </div>
      </main>
    </>
  );
}
