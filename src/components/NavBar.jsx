import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <Link className="navbar-brand" to="/">
        Mi Tienda
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/zapatillas">
              Zapatillas
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/remeras">
              Remeras
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/category/accesorios">
              Accesorios
            </Link>
          </li>
        </ul>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
