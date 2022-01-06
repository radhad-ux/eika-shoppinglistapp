import React from "react";
import hero from "../img/hero.jpg";
import "../styles/welcome.css";


export default function Welcome() {
  return (
    <div className="welcome">
      <img src={hero} alt="hero-img" />
      <div className="welcome-msg">
        <h2>Welcome to EIKA!</h2>
        <div className="description">
           Keep track of your shopping list with the app.Get
          started by adding a item to your list. You can then sort your shopping
          list by name or price and mark items as acquired.
          <br />
          <strong>Thank you for shopping with us ...</strong>
        </div>
      </div>
    </div>
  );
}
