import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import AllProduct from "./components/buttons/AllProduct";
import AddProduct from "./components/buttons/AddProduct";
import FilterByBrand from "./components/buttons/FilterByBrand";
import FilterByCategory from "./components/buttons/FilterByCategory";
import LoadMore from "./components/buttons/LoadMore";

export default function Main() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AllProduct />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/filterByBrand" element={<FilterByBrand />} />
        <Route path="/filterByCategory" element={<FilterByCategory />} />
        <Route path="/loadMore" element={<LoadMore />} />
      </Routes>
    </div>
  );
}

// const btnNames = [
//   {name: "", value: ""},

// ]

// const [current, setCurrent] = useState("localStorage.getItem("btnVal") || "all")

// function currentStateHandler (val) {
//   setCurrent(val);
//   localStorage.setItem("btnVal", val);
// }

// {btnNames.map((btn, index) => {
//   <button key={index} onClick={() => setCurrent(btn.value)} className={current === btn.value ? "activeBtn" : "inactiveBtn"}>
//     {btn.name}
//   </button>
//   <div>{current}</div>
// })}
