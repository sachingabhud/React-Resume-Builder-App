import React, { useState } from "react";
import classes from "./ExperienceForm.module.css";

function ExperienceForm(props) {
  const [formValues, setFormValues] = useState([
    { company: "", job: "", description: "", startMonth: "", endMonth: "" },
  ]);

  const addFormFields = () => {
    setFormValues([
      ...formValues,
      { company: "", job: "", description: "", startMonth: "", endMonth: "" },
    ]);
  };

  const removeFormFields = (i) => {
    let newForm = [...formValues];
    newForm.splice(i, 1);
    setFormValues(newForm);
  };

  const handleInputChange = (event, index) => {
    const { name, value } = event.target;
    const values = [...formValues];
    console.log("test", values[index], index);
    values[index][name] = value;
    setFormValues(values);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("experienceData", JSON.stringify(formValues));
    props.handleNextStep();
  };

  const onPreviousStep = (e) => {
    e.preventDefault();
    props.handlePrevStep();
  };

  return (
    <div className="formWrap">
      <div className="formHead">
        <h3>Experience Details</h3>
      </div>
      <form>
        {formValues.map((item, index) => {
          return (
            <div className="mainWrapper" key={index}>
              <div className="rowInputWrapper">
                <div className="shortInput">
                  <label htmlFor="company"> Company Name</label>
                  <input
                    type="text"
                    required
                    name="company"
                    value={item.company}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                </div>
                <div className="shortInput">
                  <label htmlFor="job"> Job Title</label>
                  <input
                    type="text"
                    required
                    name="job"
                    value={item.job}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                </div>
              </div>

              <div className="rowInputWrapper">
                <div className="shortInput">
                  <label htmlFor="startMonth">Start Month</label>
                  <input
                    type="month"
                    required
                    name="startMonth"
                    value={item.startMonth}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                </div>
                <div className="shortInput">
                  <label htmlFor="endMonth">End Month</label>
                  <input
                    type="month"
                    required
                    name="endMonth"
                    value={item.endMonth}
                    onChange={(event) => handleInputChange(event, index)}
                  />
                </div>
              </div>

              <div className="longInput">
                <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  cols="30"
                  rows="10"
                  maxLength="250"
                  value={item.description}
                  onChange={(event) => handleInputChange(event, index)}
                />
              </div>

              <div className={classes.btnWrap}>
                {index ? (
                  <button
                    type="button"
                    className="remove"
                    onClick={() => removeFormFields(index)}
                  >
                    Remove
                  </button>
                ) : null}
                {formValues.length < 4 ? (
                  <button
                    type="button"
                    className="add"
                    onClick={() => addFormFields()}
                  >
                    Add
                  </button>
                ) : null}
              </div>
            </div>
          );
        })}
        <div className="stepWrapper">
          <button onClick={onPreviousStep}>Previous</button>
          <button onClick={onFormSubmit}>Next</button>
        </div>
      </form>
    </div>
  );
}

export default ExperienceForm;
