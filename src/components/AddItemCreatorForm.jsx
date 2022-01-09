import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

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
        isCompleted: false,
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
      <h3>Add a item for shopping</h3>
      <input
        type="text"
        placeholder="Item Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="number"
        placeholder="Item Price"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
