import React from "react";
import AddItemCreator from "../components/AddItemCreator";
import hero from "../img/online-shopping.jpg";

export default function WelcomeScreen({ itemList, setItemList }) {
  return (
    <section className="welcome">
      <img src={hero} alt="hero-img" className="hero-media" />
      <div className="welcome-wrapper">
        <h2>Welcome to EIKA!</h2>
        <h4>
          Keep track of your shopping list with the app.Get started by adding a
          item to your list. You can then sort your shopping list by name or
          price and mark items as acquired.
        </h4>

        <h3>Thank you for shopping with us ...</h3>
      </div>
      <AddItemCreator itemList={itemList} setItemList={setItemList} />
    </section>
  );
}
