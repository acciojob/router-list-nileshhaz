import React from "react";
import { useParams } from "react-router-dom";

function ItemDetail() {
  const { id } = useParams();

  const items = {
    1: { title: "Item 1", desc: "Description for Item 1" },
    2: { title: "Item 2", desc: "Description for Item 2" },
    3: { title: "Item 3", desc: "Description for Item 3" },
  };

  const item = items[id];

  if (!item) {
    return <h2>Item not found</h2>;
  }

  return (
    <div>
      <h1>{item.title}</h1>
      <p>{item.desc}</p>
    </div>
  );
}

export default ItemDetail;
