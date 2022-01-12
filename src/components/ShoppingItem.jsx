import React from "react";

export default function ShoppingItem({ item, updateItemList }) {
  const { id, name, price, isAcquired } = item;

  return (
    <div className={isAcquired === false ? "itemList" : "acquired-items"}>
      {isAcquired === false && (
        <div>
          <input type="checkbox" onChange={() => updateItemList(id)} />
        </div>
      )}
      <p>{name}</p>
      <p>{price}</p>
    </div>
  );
}
