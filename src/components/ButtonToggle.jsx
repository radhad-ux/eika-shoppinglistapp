import React from "react";
import OpenEye from "../img/eye.png";
import CloseEye from "../img/eye-slash.png";

export default function ButtonToggle({ status, onClick }) {
  const EyeImage = status ? CloseEye : OpenEye;
  return (
    <button className="icon-button toggle" onClick={onClick}>
      <img src={EyeImage} alt="Eye Image" className="icon" />
      <span>{status ? "Hide" : "View"} acquired Items</span>
    </button>
  );
}
