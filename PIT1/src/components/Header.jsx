import { ChevronDown, Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [categorias, setCategorias] = useState(false);

  function handleCategoriaDiv() {
    setCategorias(!categorias);
  }

  return (
    <header className="bg-[#F44336] text-white py-8">
      <nav className="max-w-7xl mx-auto flex items-center relative">
        <ul className="flex items-center absolute left-0 gap-9">
          <li>
            <Link
              className="cursor-pointer hover:opacity-90 relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
              to={`/`}
            >
              ASDFG
            </Link>
          </li>
          <li>
            <div
              className="cursor-pointer flex items-center gap-4 transition-all hover:opacity-90"
              onClick={handleCategoriaDiv}
              aria-expanded={categorias}
              aria-controls="categorias-menu"
            >
              Categorias
              <ChevronDown
                className={`transition-all ${categorias && "rotate-180"}`}
              />
            </div>
          </li>
          <li className="flex items-center gap-4">
            <Link
              to="/carrinho"  /* Ajustado para apontar para a página do carrinho */ 
              className="cursor-pointer hover:opacity-90 relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              <div>Carrinho</div>
            </Link>
            <span className="bg-[#2196f3] p-[6px] text-xs font-light">new</span>
          </li>
        </ul>
        <h1 className="cursor-pointer text-3xl absolute right-1/2 top-0 translate-x-1/2 -translate-y-1/2">
          CGPJE
        </h1>
        <ul className="cursor-pointer flex items-center absolute right-0 gap-3">
          <li className="flex items-center gap-4">
            <Link
              to="/login"
              className="cursor-pointer hover:opacity-90 relative w-fit block after:block after:content-[''] after:absolute after:h-[2px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-center"
            >
              <div>Login</div>
            </Link>
            <Lock />
          </li>
        </ul>
        <div
          id="categorias-menu"
          className={`${
            categorias ? "opacity-100" : "opacity-0 hidden"
          } bg-white absolute bottom-0 translate-y-[292px] translate-x-[78px] z-50 shadow-2xl transition-all`}
        >
          <ul>
            <Link to="/categoria/fugit">
              <li className="py-[14px] px-[16px] text-[#26A69A] transition-all hover:bg-gray-100 cursor-pointer">
                fugit
              </li>
            </Link>
            <Link to="/categoria/vitae">
              <li className="py-[14px] px-[16px] text-[#26A69A] transition-all hover:bg-gray-100 cursor-pointer">
                vitae
              </li>
            </Link>
            <Link to="/categoria/aperiam">
              <li className="py-[14px] px-[16px] text-[#26A69A] transition-all hover:bg-gray-100 cursor-pointer">
                aperiam
              </li>
            </Link>
            <Link to="/categoria/unde">
              <li className="py-[14px] px-[16px] text-[#26A69A] transition-all hover:bg-gray-100 cursor-pointer">
                unde
              </li>
            </Link>
            <Link to="/categoria/explicabo">
              <li className="py-[14px] px-[16px] text-[#26A69A] transition-all hover:bg-gray-100 cursor-pointer">
                explicabo
              </li>
            </Link>
          </ul>
        </div>
      </nav>
    </header>
  );
}
