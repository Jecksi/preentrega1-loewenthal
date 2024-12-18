const Item = ({ product }) => {
  return (
    <div>
      <div>
        <img src={product.image} />
        <p>{product.name}</p>
        <p>Precio: {product.price}</p>
      </div>
    </div>
  );
};

export default Item;
