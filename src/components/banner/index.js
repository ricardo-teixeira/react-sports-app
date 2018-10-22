import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./banner.css";

const Banner = () => (
  <div className="banner">
    <div className="container">
      <div className="flex-grid flex-wrap">
        <div className="banner-item">
          <FontAwesomeIcon icon="puzzle-piece" className="banner-icon col" />
          <div className="description">
            <span>Sport type</span>
            <h3>Cycling</h3>
          </div>
        </div>
        <div className="banner-item">
          <FontAwesomeIcon icon="trophy" className="banner-icon col" />
          <div className="description">
            <span>Mode</span>
            <h3>Advanced</h3>
          </div>
        </div>
        <div className="banner-item">
          <FontAwesomeIcon icon="map-signs" className="banner-icon col" />
          <div className="description">
            <span>Route</span>
            <h3>30 miles</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Banner;
