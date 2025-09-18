import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container-md mt-4">
        <Routes>
          {/* Home */}
          <Route
            path="/"
            element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda online!" />}
          />

          {/* Categorías */}
          <Route
            path="/category/:categoryId"
            element={<ItemListContainer saludo="Productos por categoría" />}
          />

          {/* Detalle de producto */}
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />

          {/* Página 404 */}
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

