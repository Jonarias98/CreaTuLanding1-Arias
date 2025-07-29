import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <main className="container-md mt-4">
        <ItemListContainer saludo="¡Bienvenido a nuestra tienda online!" />
      </main>
    </>
  );
}

export default App;
