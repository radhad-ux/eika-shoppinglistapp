import React from "react";

export default function ShoppingItem({ item, updateItemList }) {
  const { id, name, price, isAcquired } = item;

  return (
    <article className={isAcquired === false ? "itemList" : "acquired-items"}>
      {isAcquired === false && (
        <div>
          <input
            className="checkbox-label"
            type="checkbox"
            onChange={() => updateItemList(id)}
          />
        </div>
      )}
      <p>{name}</p>
      <p>{price}</p>
    </article>
  );
}
