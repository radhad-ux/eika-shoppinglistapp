import React from "react";
import OpenEye from "../img/eye.png";
import CloseEye from "../img/eye-slash.png";

export default function ButtonToggle({ showAcquired, onClick }) {
  const EyeImage = showAcquired ? CloseEye : OpenEye;
  return (
    <button className="icon-button toggle" onClick={onClick}>
      {showAcquired ? "Hide" : "View"} acquired Items?
      <img src={EyeImage} alt="Eye" className="icon" />
    </button>
  );
}
