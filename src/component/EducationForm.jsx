import { useState } from "react";
import classes from "./EducationForm.module.css";
import { v4 as uuidv4 } from "uuid";

// const initialValues = {
//   id: formValues.length,
//   school: "",
//   location: "",
//   degree: "",
//   startMonth: "",
//   endMonth: ""
// }

function EducationForm(props) {
  const [formValues, setFormValues] = useState([
    {
      id: uuidv4(),
      school: "",
      location: "",
      degree: "",
      startMonth: "",
      endMonth: "",
    },
  ]);

  const addFormFields = () => {
    setFormValues([
      ...formValues,
      {
        id: uuidv4(),
        school: "",
        location: "",
        degree: "",
        startMonth: "",
        endMonth: "",
      },
    ]);
  };

  const removeFormFields = (i) => {
    let newForm = [...formValues];
    newForm.splice(i, 1);
    setFormValues(newForm);
  };

  const handleInputChange = (id, event) => {
    const newInputFields = formValues.map((item) => {
      if (id === item.id) {
        item[event.target.name] = event.target.value;
      }
      return item;
    });
    setFormValues(newInputFields);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("educationData", JSON.stringify(formValues));
    props.handleNextStep();
  };

  const onPreviousStep = (e) => {
    e.preventDefault();
    props.handlePrevStep();
  };

  return (
    <div className="formWrap">
      <div className="formHead">
        <h3>Educational Details</h3>
      </div>
      <form>
        {formValues.map((item, index) => {
          return (
            <div className={classes.mainWrapper} key={item.id}>
              <div className="rowInputWrapper">
                <div className="shortInput">
                  <label htmlFor="school"> School Name</label>
                  <input
                    type="text"
                    required
                    name="school"
                    value={item.school}
                    onChange={(event) => handleInputChange(item.id, event)}
                  />
                </div>
                <div className="shortInput">
                  <label htmlFor="location"> School Location</label>
                  <input
                    type="text"
                    required
                    name="location"
                    value={item.location}
                    onChange={(event) => handleInputChange(item.id, event)}
                  />
                </div>
              </div>
              <div className="longInput">
                <label htmlFor="degree"> Degree</label>
                <input
                  type="text"
                  required
                  name="degree"
                  value={item.degree}
                  onChange={(event) => handleInputChange(item.id, event)}
                />
              </div>
              <div className="rowInputWrapper">
                <div className="shortInput">
                  <label htmlFor="startMonth">Start Month</label>
                  <input
                    type="month"
                    required
                    name="startMonth"
                    value={item.startMonth}
                    onChange={(event) => handleInputChange(item.id, event)}
                  />
                </div>
                <div className="shortInput">
                  <label htmlFor="endMonth">End Month</label>
                  <input
                    type="month"
                    required
                    name="endMonth"
                    value={item.endMonth}
                    onChange={(event) => handleInputChange(item.id, event)}
                  />
                </div>
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
                {formValues.length < 2 ? (
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

export default EducationForm;
