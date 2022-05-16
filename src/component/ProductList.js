const ProductList = (props) => {
  return (
    <div className="box">
      <img className="thumbnail-image" src={props.thumbnail} alt="" />
      <h2>{props.title}</h2>
      <p>
        Price Rs. <b>${props.price}</b>
      </p>
      <p>
        Rating : <b>{props.rating} / 5</b>
      </p>
    </div>
  );
};
export default ProductList;
