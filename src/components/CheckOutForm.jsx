import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const { cart, clearCart, totalPrice } = useContext(CartContext);
  const [buyer, setBuyer] = useState({ name: "", email: "" });
  const [orderId, setOrderId] = useState(null);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setBuyer({ ...buyer, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const order = {
      buyer,
      items: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };

    try {
      const docRef = await addDoc(collection(db, "orders"), order);
      setOrderId(docRef.id);
      clearCart();
    } catch (error) {
      console.error("Error al generar la orden: ", error);
    }
  };

  if (orderId) {
    return (
      <div className="container mt-4">
        <h2>¡Compra realizada con éxito!</h2>
        <p>Tu ID de orden es: <strong>{orderId}</strong></p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>Volver al catálogo</button>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nombre</label>
          <input type="text" name="name" className="form-control" value={buyer.name} onChange={handleInputChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input type="email" name="email" className="form-control" value={buyer.email} onChange={handleInputChange} required />
        </div>
        <button type="submit" className="btn btn-success">Confirmar compra</button>
      </form>
    </div>
  );
};

export default CheckoutForm;
