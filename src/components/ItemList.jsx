const ItemList = ({ products }) => {
  return (
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-4 mb-3">
          <div className="card p-2">
            <h5>{product.name}</h5>
            <p>Precio: ${product.price}</p>
            <p>Categoría: {product.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
