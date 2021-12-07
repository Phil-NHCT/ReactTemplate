import React from "react";
import "./SideNav.css";

const SideNav = () => {
  return (
    <div id="mySidenav" className="sidenav">
      <span id="option1">Text</span>
      <span href="#" id="option2">
        <i className="bi-person"></i>
      </span>
      <span href="#" id="option3">
        <i className="bi-bar-chart-fill"></i>
      </span>
      <span href="#" id="option4">
        <i className="bi-pie-chart-fill"></i>
      </span>
      <span href="#" id="option5">
        <i className="bi-bell"></i>
      </span>
      <span href="#" id="option6">
        <i className="bi-book"></i>
      </span>
      <span href="#" id="option7">
        <i className="bi-moon"></i>
      </span>
    </div>
  );
};

export default SideNav;
