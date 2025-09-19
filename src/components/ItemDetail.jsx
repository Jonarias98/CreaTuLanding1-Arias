import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount";

const products = [
  { id: 1, name: "Zapatillas Vans", price: 50000, category: "zapatillas", stock: 10 },
  { id: 2, name: "Remera Vans", price: 15000, category: "remeras", stock: 15 },
  { id: 3, name: "Mochila Vans", price: 20000, category: "accesorios", stock: 5 },
];

const getProduct = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((p) => p.id === parseInt(id)));
    }, 500);
  });
};

const ItemDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProduct(productId).then((res) => setProduct(res));
  }, [productId]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div className="container mt-4">
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      
      <ItemCount product={product} initial={1} stock={product.stock} />
    </div>
  );
};

export default ItemDetail;

