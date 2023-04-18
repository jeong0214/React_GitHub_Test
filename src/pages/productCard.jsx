import { Link } from "react-router-dom";

function ProductCard({ data }) {
  return (
    <div className="ProductCard">
      <div className="img">
        <img src={`${process.env.PUBLIC_URL}/img/${data.img}`} alt="" />
        <span className="addcart">add to cart</span>
      </div>
      <div>
        <p>{data.title}</p>
        <p>{data.price}</p>
      </div>
      <Link to={`/Detail/${data._id}`} className="btn_add">
        상품 디테일 페이지
      </Link>
    </div>
  );
}
export default ProductCard;
