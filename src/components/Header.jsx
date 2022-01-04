import React from "react";
import logo from "../img/mainlogo.jpg";
import "../styles/header.css";

export default function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
}
