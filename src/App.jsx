import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckoutForm from "./components/CheckoutForm";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <main className="container-md mt-4">
        <Routes>
          <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda online!" />} />
          <Route path="/category/:categoryId" element={<ItemListContainer saludo="¡Bienvenido a nuestra tienda online!" />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<CheckoutForm />} />
          <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
