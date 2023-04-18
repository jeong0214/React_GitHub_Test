import { Link } from "react-router-dom";
import ProductCard from "./productCard";

function MainTopList({ data }) {
  let dataList = data.filter((item) => item.category === "top");
  return (
    <section className="MainTopList mw">
      <h2>Shop The Latest</h2>
      <Link to="/">View All</Link>
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
export default MainTopList;
