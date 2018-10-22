import React from "react";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import "./user-dropdown.css";

const UserDropdown = ({ user }) => (
  <div className="user-dropdown">
    <span className="user-acronym">
      {user.name &&
        user.name
          .split(" ")
          .map(w => w[0].toUpperCase())
          .join("")}
    </span>
    <span className="user-name">{user.name}</span>
    <FontAwesomeIcon icon="angle-down" />
  </div>
);

export default UserDropdown;
