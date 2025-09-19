const CartItem = ({ item, removeItem }) => {
  const subtotal = item.count * item.price;

  return (
    <div className="d-flex justify-content-between align-items-center border p-2 mb-2">
      <div>
        <h5>{item.name}</h5>
        <p>Cantidad: {item.count}</p>
        <p>Precio unitario: ${item.price}</p>
      </div>
      <div>
        <p>Subtotal: ${subtotal}</p>
        <button className="btn btn-danger btn-sm" onClick={() => removeItem(item.id)}>
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default CartItem;
