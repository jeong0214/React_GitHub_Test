import { Route, Routes, useLocation } from "react-router-dom";
import list from "./pages/productData";
import Footer from "./pages/Footer";
import Header from "./pages/Header";
import "./css/App.css";
import Main from "./pages/Main";
import { useState } from "react";
import Shop from "./pages/Shop";
import Detail from "./pages/Detail";

function App() {
  let subName = useLocation().pathname;
  let [data] = useState(list);
  return (
    <div className="App">
      <Header subName={subName} />
      <Routes>
        <Route path="/" element={<Main data={data} />} />
        <Route path="/Shop" element={<Shop data={data} />} />
        <Route path="/Detail/:id" element={<Detail data={data} />} />
        <Route path="/Blog" element={<div>스토리</div>} />
        <Route path="/Stroy" element={<div>페이지가없어요</div>} />
        <Route path="*" element={<div>페이지가없어요</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
