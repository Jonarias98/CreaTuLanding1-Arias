import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav>
      <h1>Mi Tienda</h1>
      <ul>
        <li>Inicio</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget /> {/* <--- este se renderiza acá */}
    </nav>
  );
};

export default NavBar;
