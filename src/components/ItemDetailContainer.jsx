import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

function ItemDetailContainer() {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const productRef = doc(db, "products", itemId);

    getDoc(productRef)
      .then((docSnap) => {
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.log("Producto no encontrado");
        }
      })
      .finally(() => setLoading(false));
  }, [itemId]);

  if (loading) return <p>Cargando producto...</p>;
  if (!product) return <p>Producto no encontrado</p>;

  return <ItemDetail product={product} />;
}

export default ItemDetailContainer;
