import { useState } from "react";
import ProductCard from "./productCard";

function Shop({ data }) {
  let [dataList, setDataList] = useState(data);
  return (
    <section className="Shop mw">
      <h2>Shop</h2>
      <nav className="btnCon">
        <button className="btn" onClick={() => setDataList(data)}>
          상품등록순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => a.price - b.price))
          }
        >
          낮은가격순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => b.price - a.price))
          }
        >
          높은가격순
        </button>
        <button
          className="btn"
          onClick={() =>
            setDataList([...dataList].sort((a, b) => b.discount - a.discount))
          }
        >
          높은할인율
        </button>
      </nav>
      <ul className="listCon">
        {dataList.map((item) => {
          return (
            <li className="list" key={item.id}>
              <ProductCard data={item} />
            </li>
          );
        })}
      </ul>
    </section>
  );
}
export default Shop;
