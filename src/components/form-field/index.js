import React from "react";
import "./form-field.css";

import { withState } from "recompose";

const enhance = withState("isFocused", "setFocus", false);

const FormField = enhance(
  ({
    isFocused,
    setFocus,
    field,
    form: { touched, errors },
    label,
    optional,
    hintText,
    withComponent: Comp,
    ...props
  }) => {
    const hasError = touched[field.name] && errors[field.name];
    const id = (field.name || "") + Date.now();

    return (
      <div className={`form-field ${hasError ? "has-error" : ""}`}>
        <label htmlFor={id}>{label}</label>{" "}
        {optional && <small className="optional">optional</small>}
        {Comp ? (
          <Comp />
        ) : (
          <input
            id={id}
            type="text"
            className="form-input"
            {...field}
            {...props}
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}
          />
        )}
        {hintText && isFocused && <small>{hintText}</small>}
        {hasError && <small className="error">{errors[field.name]}</small>}
      </div>
    );
  }
);

export default FormField;
