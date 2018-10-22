import React from "react";
import PropTypes from "prop-types";
import "./section.css";

const Section = ({ title, children }) => (
  <section className="page-section">
    <h2>
      <span>{title}</span>
    </h2>
    {children}
  </section>
);

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;
