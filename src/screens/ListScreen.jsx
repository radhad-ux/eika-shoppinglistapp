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

  function removeAllItems() {
    setItemList([]);
    localStorage.clear();
  }

  return (
    <div className="listscreen">
      <h1>Your Shopping list</h1>
      <Sorter itemList={itemList} setItemList={setItemList} />

      <ShoppingItemList itemList={itemList} setItemList={setItemList} />

      <AddItemCreator itemList={itemList} setItemList={setItemList} />

      {acquiredItemList.length > 0 && (
        <ButtonToggle
          status={showAcquired}
          onClick={() => setShowAcquired(!showAcquired)}
        />
      )}
      {showAcquired && acquiredItemList}
      <button onClick={removeAllItems}>Clear List</button>
    </div>
  );
}
