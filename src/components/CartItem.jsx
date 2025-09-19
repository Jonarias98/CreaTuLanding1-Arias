const CartItem = ({ product }) => {
  return (
    <div className="card p-2 mb-2">
      <h5>{product.name}</h5>
      <p>Cantidad: {product.quantity}</p>
      <p>Subtotal: ${product.price * product.quantity}</p>
    </div>
  );
};

export default CartItem;
