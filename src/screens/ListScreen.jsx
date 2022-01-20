import React, { useState } from "react";
import Sorter from "../components/Sorter";
import ShoppingItemList from "../components/ShoppingItemList";
import ButtonToggle from "../components/ButtonToggle";
import AddItemCreator from "../components/AddItemCreator";
import ShoppingItem from "../components/ShoppingItem";

export default function ListScreen({ itemList, setItemList }) {
  const [showAcquired, setShowAcquired] = useState(false);

  const acquiredItemList = itemList
    .filter((item) => item.isAcquired)
    .map((item) => <ShoppingItem key={item.id} item={item} />);

  const removeAllItems = () => {
    setItemList([]);
    localStorage.clear();
  };

  return (
    <section className="listscreen">
      <div className="text-box">
        <h2>Your Shopping list</h2>
      </div>
      <Sorter itemList={itemList} setItemList={setItemList} />

      <ShoppingItemList itemList={itemList} setItemList={setItemList} />

      <AddItemCreator itemList={itemList} setItemList={setItemList} />

      <ButtonToggle
        showAcquired={showAcquired}
        onClick={() => setShowAcquired(!showAcquired)}
      />

      {showAcquired && acquiredItemList}

      <button className="btn-secondary" onClick={removeAllItems}>
        Clear List
      </button>
    </section>
  );
}
