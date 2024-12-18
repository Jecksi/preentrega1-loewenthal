import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { getProducts } from "../../../data/data.js";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("termino la promesa");
      });
  }, []);

  return (
    <div className="itemListContainer">
      <h1> {greeting} </h1>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
