import { Link } from "react-router-dom";

function Header({ subName }) {
  let bar = subName === "/" ? "" : "bar";
  let linkName = document.querySelectorAll(".gnb > a");
  linkName.forEach((item) => {
    item.classList.remove("on");
    if (item.getAttribute("href") === subName) item.classList.add("on");
    else if (
      item.getAttribute("href") === "/Shop" &&
      subName.indexOf("/Detail") === 0
    ) {
      item.classList.add("on");
    }
  });
  return (
    <header className={`hd mw ${bar}`}>
      <h1>
        <Link to="/">
          <img src={`${process.env.PUBLIC_URL}/img/logo.svg`} alt="" />
        </Link>
      </h1>
      <nav className="gnb">
        <Link to="/Shop">Shop</Link>
        <Link to="/Blog">Blog</Link>
        <Link to="/Stroy">Our Story</Link>
      </nav>
      <div className="person">
        <Link to="/">
          <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
        </Link>
        <Link to="/">
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        </Link>
        <Link to="/">
          <i className="fa-sharp fa-solid fa-user"></i>
        </Link>
      </div>
    </header>
  );
}
export default Header;
