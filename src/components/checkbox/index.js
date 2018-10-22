import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./checkbox.css";

const Checkbox = ({ id, label, ...props }) => (
  <label htmlFor={id} className="checkbox-wrapper">
    {label}
    <input type="checkbox" {...props} />
    <span className={`checkmark ${props.type === "radio" ? "rounded" : ""}`}>
      {props.type === "checkbox" && (
        <FontAwesomeIcon icon="check" className="icon" />
      )}
      {props.type === "radio" && (
        <FontAwesomeIcon icon="circle" className="icon" />
      )}
    </span>
  </label>
);

export default Checkbox;
