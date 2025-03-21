import "./style.css";

const ProductCard = ({ imgURL, changeBigProductImage, bigProductImg }) => {
  const handleClick = () => {
    if (bigProductImg !== imgURL.bigProduct) {
      changeBigProductImage(imgURL.bigProduct);
    }
  };

  return ( 
    <div
      className={`product__card ${bigProductImg === imgURL.bigProduct ? "active" : ""}`}
      onClick={handleClick}
    >
      <div className="product__card-image">
        <img
          src={imgURL.thumbnail}
          alt="jetPeel collection"
          width={137}
          height={113}
          className="product__thumbnail"
        />
      </div>
    </div>
  );
}

export default ProductCard;
