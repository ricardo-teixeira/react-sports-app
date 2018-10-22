import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";

import "./topics.css";

const Topics = () => (
  <div className="topics flex-grid flex-wrap justify-between">
    <div className="col">
      <h3 className="topic-title">Need help?</h3>
      <div className="flex-grid align-items-center">
        <FontAwesomeIcon icon="life-ring" className="topic-icon" />
        <p className="topic-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div className="col">
      <h3 className="topic-title">Why register?</h3>
      <div className="flex-grid align-items-center">
        <FontAwesomeIcon icon="heartbeat" className="topic-icon" />
        <p className="topic-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
    <div className="col">
      <h3 className="topic-title">What people are saying...?</h3>
      <div className="flex-grid align-items-center">
        <FontAwesomeIcon icon="smile" className="topic-icon" />
        <p className="topic-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  </div>
);

export default Topics;
