import React from "react";
import trash from "../img/trash.png";

export default function ShoppingItem({ item, updateItemList, deleteItemList }) {
  const { id, name, price, isAcquired } = item;

  return (
    <article className={isAcquired === false ? "itemList" : "acquired-items"}>
      {isAcquired === false && (
        <div className="todo-btn">
          <input
            className="checkbox-label"
            type="checkbox"
            onChange={() => updateItemList(id)}
          />
          <input
            className="icon"
            type="image"
            img
            src={trash}
            onClick={() => deleteItemList(id)}
          />
        </div>
      )}
      <p>{name}</p>
      <p>{price}</p>
    </article>
  );
}
