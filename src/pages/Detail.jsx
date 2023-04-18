import { useParams } from "react-router-dom";
import Count from "./Count";
import Similar from "./Similar";
import TabUi from "./tabs";

function Detail({ data }) {
  let { id } = useParams();
  id = id - 1;
  let dataList = data.filter((a) => a.category === data[id].category);
  return (
    <section className="detail mw">
      <h2>상품 상세 페이지</h2>
      <div className="detailCon">
        <div className="img">
          <img src={`${process.env.PUBLIC_URL}/img/${data[id].img}`} alt="" />
        </div>
        <div className="info">
          <h3>{data[id].title}</h3>
          <p>{data[id]._id}번 상품</p>
          <p>{data[id].price}</p>
          <p>{data[id].discount} %</p>
          {/* <button>-</button>
          <input type="text" />
          <button>+</button> */}
          {/* <button type="submit">주문하기</button> */}
          <Count />
        </div>
      </div>
      <TabUi />
      <Similar data={dataList} />
    </section>
  );
}
export default Detail;
