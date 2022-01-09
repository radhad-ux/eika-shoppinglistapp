import React from "react";
import Sorter from "../components/Sorter";
import ShoppingItemList from "../components/ShoppingItemList";

export default function ListScreen({ itemList, setItemList }) {
  function removeAllItems() {
    setItemList([]);
    localStorage.clear();
  }

  return (
    <div className="listscreen">
      <h1>Your Shopping list</h1>
      <ShoppingItemList itemList={itemList} setItemList={setItemList} />
      <Sorter itemList={itemList} setItemList={setItemList} />
      <button onClick={removeAllItems}>Clear List</button>
    </div>
  );
}
