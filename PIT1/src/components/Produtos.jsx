import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

export default function Produtos({ id, img, nome, descricao, key }) {
  return (
    <div
      key={key}
      className="flex flex-col w-[400px] h-[500px] shadow-2xl relative"
    >
      <img src={img} className="w-full h-[80%]" />
      <Link
        to={`/produto/${id}`}
        className="absolute right-0 bottom-0 -translate-x-6 -translate-y-20 rounded-full bg-[#F44336] p-2 cursor-pointer transition-all hover:opacity-95"
      >
        <Eye color="#FFF" />
      </Link>
      <div className="p-5 w-full h-[20%] space-y-2">
        <h1 className="text-2xl">{nome}</h1>
        <p className="text-sm">{descricao}</p>
      </div>
    </div>
  );
}
