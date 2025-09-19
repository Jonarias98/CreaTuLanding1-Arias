import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, removeItem, totalItems, totalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <h2>Carrito vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Tu Carrito</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeItem={removeItem} />
      ))}
      <hr />
      <p>Total de productos: {totalItems()}</p>
      <p>Total a pagar: ${totalPrice()}</p>
      <button className="btn btn-warning me-2" onClick={clearCart}>
        Vaciar carrito
      </button>
      <Link to="/checkout" className="btn btn-success">
        Finalizar compra
      </Link>
    </div>
  );
};

export default Cart;

