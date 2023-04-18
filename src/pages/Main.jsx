import MainEvent from "./MainEvent";
import MainTopList from "./MainTopList";

function Main({ data }) {
  return (
    <section className="mw">
      <MainEvent />
      <MainTopList data={data} />
      <p>main</p>
    </section>
  );
}
export default Main;
