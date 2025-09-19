const Item = ({ product }) => {
  return (
    <div className="card p-2">
      <h5>{product.name}</h5>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
    </div>
  );
};

export default Item;
