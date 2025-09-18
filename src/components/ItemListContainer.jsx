import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const products = [
  { id: 1, name: "Zapatillas Vans", price: 50000, category: "zapatillas" },
  { id: 2, name: "Remera Vans", price: 15000, category: "remeras" },
  { id: 3, name: "Mochila Vans", price: 20000, category: "accesorios" },
];

const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((res) => {
      if (categoryId) {
        setItems(res.filter((prod) => prod.category === categoryId));
      } else {
        setItems(res);
      }
    });
  }, [categoryId]);

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <ItemList products={items} />
    </div>
  );
}

export default ItemListContainer;
