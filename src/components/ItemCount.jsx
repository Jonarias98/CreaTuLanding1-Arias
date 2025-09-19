import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";

const ItemCount = ({ stock, initial, product }) => {
  const [count, setCount] = useState(initial);
  const { addItem } = useContext(CartContext);
  const [added, setAdded] = useState(false); 

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleAddToCart = () => {
    addItem(product, count);
    setAdded(true);
  };


  if (added) return <p>Producto agregado al carrito</p>;

  return (
    <div className="d-flex align-items-center mt-3">
      <button className="btn btn-secondary me-2" onClick={handleSubtract}>
        -
      </button>
      <span>{count}</span>
      <button className="btn btn-secondary ms-2" onClick={handleAdd}>
        +
      </button>
      <button className="btn btn-primary ms-3" onClick={handleAddToCart}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
