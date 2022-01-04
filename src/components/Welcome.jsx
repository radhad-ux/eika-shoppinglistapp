import React from "react";
import hero from "../img/hero.jpg";
import "../styles/welcome.css";

export default function Welcome() {
  return (
    <div className="welcome">
      <img src={hero} alt="hero-img" />
      <div className="emptylist">
        <div className="description">
          Welcome to EIKA! Keep track of your shopping list with the app.Get
          started by adding a item to your list. You can then sort your shopping
          list by name or price and mark items as acquired.
          <br />
          <strong>Thank you for shopping with us ...</strong>
        </div>
      </div>
      <button className="main-btn">Add Item</button>
    </div>
  );
}
