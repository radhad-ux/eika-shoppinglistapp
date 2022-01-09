import React, { useState } from "react";
import AddItemCreator from "../components/AddItemCreator";
import hero from "../img/hero.jpg";
import "../styles/welcome.css";

export default function WelcomeScreen({ itemList, setItemList }) {
  // const [itemList, setItemList] = useState([]);
  return (
    <div className="welcome">
      <img src={hero} alt="hero-img" />
      <div className="welcome-msg">
        <h2>Welcome to EIKA!</h2>
        <div className="description">
          Keep track of your shopping list with the app.Get started by adding a
          item to your list. You can then sort your shopping list by name or
          price and mark items as acquired.
          <br />
          <strong>Thank you for shopping with us ...</strong>
        </div>
      </div>
      <AddItemCreator itemList={itemList} setItemList={setItemList} />
    </div>
  );
}
