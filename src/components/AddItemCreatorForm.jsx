import React, { useState } from "react";

export default function AddItemCreatorForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (inputIsValid) {
      onSubmit({
        id: Math.random(),
        name: name,
        price: price,
        isAcquired: false,
      });
      setName("");
      setPrice("");
    }
  }
  function inputIsValid() {
    if (name.trim() === "") {
      return alert("Please Enter the Item Name");
    } else if (price.trim() === "") {
      return alert("Please Enter the Item Price");
    } else {
      return true;
    }
  }

  return (
    <div className="itemCreatorForm">
      <h3>Add an item for shopping</h3>
      <div className="form">
        <input
          className="inputName"
          type="text"
          placeholder="Item Name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          className="inputPrice"
          type="number"
          placeholder="Item Price"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <button className="btn-form" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
