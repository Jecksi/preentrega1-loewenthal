import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div>
      <div>
        <img src={product.image} />
        <p>{product.name}</p>
        <p>Precio: {product.price}</p>

        <Link to={"/detail/" + product.id}>Ver Detalle</Link>
      </div>
    </div>
  );
};

export default Item;
