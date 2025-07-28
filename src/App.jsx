import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer saludo="¡Bienvenido a nuestra tienda online!" />
    </>
  );
}

export default App;
