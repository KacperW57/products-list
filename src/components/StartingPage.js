import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

export default function StartingPage() {
  return (
    <div className="StartingPageContainer">
      <Link to="/page/1">Open the products list</Link>
    </div>
  );
}
