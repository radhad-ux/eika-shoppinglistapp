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
    <section className="sorter">
      <h4 className="sort-label">Sort items by:</h4>
      <div className="btn-sortbyname">
        <button className="btn-sorter" onClick={sortByName}>
          Name
        </button>
      </div>
      <div className="btn-sortbyprice">
        <button className="btn-sorter" onClick={sortByPrice}>
          Price
        </button>
      </div>
    </section>
  );
}
