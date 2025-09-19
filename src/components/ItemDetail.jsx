import ItemCount from "./ItemCount";

function ItemDetail({ product }) {
  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      <p>Stock disponible: {product.stock}</p>

      {/* Pasamos el producto completo a ItemCount */}
      <ItemCount initial={1} stock={product.stock} product={product} />
    </div>
  );
}

export default ItemDetail;
