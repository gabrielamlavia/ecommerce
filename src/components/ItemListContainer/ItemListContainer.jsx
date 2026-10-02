import { useEffect, useState } from "react";
import { ItemList } from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(true);
  const {category} = useParams();

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error al cargar los productos");
        }

        return res.json();
      })
      .then((data) => {
          {/*Si hay una categoría en la URL, filtramos los productos por esa categoría, sino mostramos todos los productos*/}
              const filteredProducts = category ?
                  data.filter((product) => product.category === category)
                : data;
          setProducts(filteredProducts);
      })
      .catch((error) => setErrors(error.message))
      .finally(() => setLoading(false));
  }, [category]);

  if (loading) return <p>Cargando...</p>;
  if (errors) return <p>{errors}</p>;

  return (
    <section>
        <h1>{category ? `Productos de ${category}` : "Productos"}</h1>
        <ItemList products={products} />
    </section>
  );
};
