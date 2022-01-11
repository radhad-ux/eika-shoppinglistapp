import React from "react";

export default function ButtonToggle({ status, onClick }) {
  return (
    <button className="button-secondary" onClick={onClick}>
      <span>{status ? "Hide" : "View"} acquired Items</span>
    </button>
  );
}
