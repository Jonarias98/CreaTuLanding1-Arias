import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Sumar todas las cantidades de productos en el carrito
  const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="btn btn-outline-light position-relative">
      🛒
      {totalQuantity > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalQuantity}
          <span className="visually-hidden">productos en el carrito</span>
        </span>
      )}
    </Link>
  );
};

export default CartWidget;
