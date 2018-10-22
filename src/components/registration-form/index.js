import React from "react";
import { Formik, Field } from "formik";
import Yup from "yup";
import { setLocale } from "yup/lib/customLocale";
import FormField from "../form-field";
import Checkbox from "../checkbox";
import { DAYS_OF_WEEK } from "../../utils";
import "./registration-form.css";

setLocale({
  mixed: {
    required: "This field is mandatory"
  }
});

const handleCheckboxChange = (e, values, setFieldValue) => {
  const newValue = [...values[e.target.name]];

  if (e.target.checked) {
    newValue.push(e.target.value);
  } else {
    const idx = newValue.indexOf(e.target.value);

    newValue.splice(idx, 1);
  }

  setFieldValue(e.target.name, newValue);
};

const initialValues = {
  username: "",
  name: "",
  email: "",
  city: "",
  rideInGroup: "",
  daysOfWeek: []
};

var schema = Yup.object().shape({
  name: Yup.string().required(),
  username: Yup.string().required(),
  email: Yup.string()
    .email()
    .required(),
  rideInGroup: Yup.string().required(),
  daysOfWeek: Yup.array()
    .of(Yup.string())
    .required("Choose at least one option")
});

const RegistrationForm = props => (
  <Formik
    onSubmit={values => {
      const { city, ...user } = values;
      const data = {
        id: Date.now(),
        ...user,
        address: {
          city
        }
      };

      props.addUser(data);
    }}
    initialValues={initialValues}
    validationSchema={schema}
  >
    {({
      handleSubmit,
      handleChange,
      handleBlur,
      setFieldValue,
      values,
      errors,
      resetForm
    }) => {
      return (
        <form onSubmit={handleSubmit} className="registration-form">
          <div className="flex-grid">
            <div className="col">
              <div className="form-group">
                <Field
                  label="Username"
                  name="username"
                  hintText="Your user name"
                  placeholder="Username"
                  component={FormField}
                />
              </div>
              <div className="form-group">
                <Field
                  label="Name"
                  placeholder="Name"
                  hintText="Your full name"
                  name="name"
                  component={FormField}
                />
              </div>
              <div className="form-group">
                <Field
                  label="E-mail"
                  placeholder="E-mail"
                  hintText="Email address"
                  type="email"
                  name="email"
                  component={FormField}
                />
              </div>
            </div>

            <div className="col">
              <div className="form-group">
                <Field
                  label="City"
                  placeholder="City"
                  hintText="What city do you live?"
                  name="city"
                  component={FormField}
                  optional
                />
              </div>

              <div className="form-group">
                <Field
                  label="Ride in group?"
                  name="rideInGroup"
                  component={FormField}
                  withComponent={() => (
                    <div>
                      {["Always", "Sometimes", "Never"].map(value => (
                        <Checkbox
                          key={value}
                          label={value}
                          onChange={handleChange}
                          type="radio"
                          name="rideInGroup"
                          value={value}
                          checked={values.rideInGroup === value}
                        />
                      ))}
                    </div>
                  )}
                />
              </div>

              <div className="form-group">
                <Field
                  label="Days of the week"
                  name="daysOfWeek"
                  component={FormField}
                  withComponent={() => (
                    <div>
                      {Object.entries(DAYS_OF_WEEK).map(([value, key]) => (
                        <Checkbox
                          key={value}
                          label={key}
                          onChange={e =>
                            handleCheckboxChange(e, values, setFieldValue)
                          }
                          type="checkbox"
                          name="daysOfWeek"
                          value={value}
                          checked={values.daysOfWeek.indexOf(value) > -1}
                        />
                      ))}
                    </div>
                  )}
                />
              </div>
            </div>
          </div>

          <div className="container">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
            <button
              type="button"
              className="btn btn-default"
              onClick={() => resetForm(initialValues)}
            >
              Discard
            </button>
          </div>
        </form>
      );
    }}
  </Formik>
);

export default RegistrationForm;
