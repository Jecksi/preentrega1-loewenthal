import "./ItemDetail.scss";

const ItemDetail = ({ product }) => {
  if (!product || !product.image) {
    return <p>Cargando producto...</p>;
  } else {
    return (
      <div className="itemdetail">
        <img src={product.image} alt="" />
        <h2>{product.name}</h2>
        <p>Precio: ${product.price}</p>
        <p>{product.detail}</p>
      </div>
    );
  }
};

export default ItemDetail;
