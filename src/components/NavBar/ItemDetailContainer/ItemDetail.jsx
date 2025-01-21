const ItemDetail = ({ product }) => {
  return (
    <div className="itemdetail">
      <img src={product.image} alt="" />
      <h2>{product.name}</h2>
    </div>
  );
};

export default ItemDetail;
