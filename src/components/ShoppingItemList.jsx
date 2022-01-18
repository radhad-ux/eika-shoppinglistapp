import React from "react";
import ShoppingItem from "./ShoppingItem";
import trash from "../img/trash.png";

function ShoppingItemList({ itemList, setItemList }) {
  const updateItemList = (id) => {
    const updatedItemList = [...itemList].map((item) => {
      if (item.id === id) {
        item.isAcquired = !item.isAcquired;
      }
      return item;
    });
    setItemList(updatedItemList);
  };

  const deleteItemList = (id) => {
    const deletedItemList = itemList.filter((item) => {
      return id !== item.id;
    });

    setItemList(deletedItemList);
  };

  const PendingItemList = itemList
    .filter((item) => !item.isAcquired)
    .map((item) => (
      <ShoppingItem
        key={item.id}
        item={item}
        updateItemList={updateItemList}
        deleteItemList={deleteItemList}
      />
    ));

  return (
    <div className="shopping-list">
      {PendingItemList.length > 0 ? (
        PendingItemList
      ) : (
        <p> No pending items to show </p>
      )}
    </div>
  );
}
export default ShoppingItemList;
