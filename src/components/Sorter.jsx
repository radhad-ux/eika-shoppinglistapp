import React from "react";

export default function Sorter({ itemList, setItemList }) {
  function sortByName() {
    const sorted = itemList.sort((a, b) => a.name.localeCompare(b.name));

    setItemList([...sorted]);
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }
  function sortByPrice() {
    const sorted = itemList.sort((a, b) => a.price - b.price);

    setItemList([...sorted]);
    localStorage.setItem("itemList", JSON.stringify(itemList));
  }
  return (
    <div className="sorter">
      <label>Sort items by</label>
      <button className="btn-sorter" onClick={sortByName}>
        Name
      </button>
      <button className="btn-sorter" onClick={sortByPrice}>
        Price
      </button>
    </div>
  );
}
