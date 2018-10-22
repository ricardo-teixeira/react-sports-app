import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import React from "react";
import "./breadcrumb.css";

const Breadcrumb = () => (
  <div className="breadcrumb">
    <nav className="container">
      <div className="container">
        <a href="#" className="crumb">
          <FontAwesomeIcon icon="home" />
        </a>
        <FontAwesomeIcon icon="angle-right" className="separator" />
        <a href="#" className="crumb">
          PageName
        </a>
        <FontAwesomeIcon icon="angle-right" className="separator" />
        <a href="#" className="crumb">
          Breadcrumb
        </a>
        <FontAwesomeIcon icon="angle-right" className="separator" />
        <a href="#" className="crumb current">
          Current page
        </a>
      </div>
    </nav>
  </div>
);

export default Breadcrumb;
