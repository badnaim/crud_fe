import React from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const navigate = useNavigate();
  // const [active, setActive] = useState("");

  return (
    <div>
      <button onClick={() => { navigate("/"); }}>All product</button>
      <button onClick={() => { navigate("/loadMore"); }}>Load more</button>
      <button onClick={() => { navigate("/filterByCategory"); }}>Filter by category</button>
      <button onClick={() => { navigate("/filterByBrand"); }}>Filter by brand</button>
      <button onClick={() => { navigate("/addProduct"); }}>Add product</button>
    </div>
  );
}
