import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function ItemListContainer({ greeting }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const productsCollection = collection(db, "products");

    const q = categoryId
      ? query(productsCollection, where("category", "==", categoryId))
      : productsCollection;

    getDocs(q)
      .then((res) => {
        const products = res.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setItems(products);
      })
      .finally(() => setLoading(false));
  }, [categoryId]);

  if (loading) return <p>Cargando productos...</p>;

  return (
    <div className="container">
      <h2>{greeting}</h2>
      <ItemList products={items} />
    </div>
  );
}

export default ItemListContainer;
