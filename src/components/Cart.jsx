import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, totalPrice, removeItem, clearCart } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="container mt-4">
        <h2>Tu carrito está vacío</h2>
        <Link to="/">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Carrito de compras</h2>
      {cart.map(item => (
        <div key={item.id} className="d-flex justify-content-between align-items-center border p-2 mb-2">
          <div>
            <h5>{item.name}</h5>
            <p>Precio: ${item.price}</p>
            <p>Cantidad: {item.quantity}</p>
          </div>
          <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar</button>
        </div>
      ))}
      <h4>Total: ${totalPrice()}</h4>
      <button className="btn btn-secondary me-2" onClick={clearCart}>Vaciar carrito</button>
      <Link to="/checkout" className="btn btn-primary">Finalizar compra</Link>
    </div>
  );
};

export default Cart;
