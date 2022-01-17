import React, { useState } from "react";
import AddItemCreatorForm from "./AddItemCreatorForm";

export default function AddItemCreator({ itemList, setItemList }) {
  const [toggleForm, setToggleForm] = useState(false);

  function createItem(inputData) {
    setItemList([...itemList, inputData]);
  }

  return (
    <div className="itemCreator">
      <button className="btn-main" onClick={() => setToggleForm(!toggleForm)}>
        🛒 Add Item
      </button>
      {toggleForm && (
        <AddItemCreatorForm onSubmit={(inputData) => createItem(inputData)} />
      )}
    </div>
  );
}
