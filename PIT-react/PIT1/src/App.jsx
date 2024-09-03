import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProdutoPage from "./pages/Produto";
import NotFound from "./pages/404";
import CategoriaPage from "./pages/Categoria";
import CarrinhoPage from "./pages/Carrinho";
import Login from "./pages/Login/Login"; 

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produto/:id" element={<ProdutoPage />} />
          <Route path="/categoria/:id" element={<CategoriaPage />} />
          <Route path="/carrinho" element={<CarrinhoPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
