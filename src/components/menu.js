import React from "react";
import Plain from "./plain";
import Pepperoni from "./pepperoni";
import MeatLover from "./meat-lover";
import Veggie from "./veggie";
import BBQ from "./bbq";
import Hawaiian from "./hawaiian";
import "./css/menu.css";

function Menu() {
  return (
    <div className="Menu container-fluid">
      <h1 className="primary-text">New York's World Famous</h1>
      <h1 className="secondary-text">Pizza Menu</h1>
      <div className="row">
        <Plain />
        <Pepperoni />
        <MeatLover />
        <Veggie />
        <Hawaiian />
        <BBQ />
      </div>
    </div>
  );
}

export default Menu;
