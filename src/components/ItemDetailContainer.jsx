import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const products = [
  { id: 1, name: "Zapatillas Vans", price: 50000, category: "zapatillas" },
  { id: 2, name: "Remera Vans", price: 15000, category: "remeras" },
  { id: 3, name: "Mochila Vans", price: 20000, category: "accesorios" },
];

const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === Number(id)));
    }, 1000);
  });
};

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    getProductById(itemId).then((res) => setProduct(res));
  }, [itemId]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>Precio: ${product.price}</p>
      <p>Categoría: {product.category}</p>
      {/* Aquí luego podés agregar ItemCount para unidades */}
    </div>
  );
}

export default ItemDetailContainer;
