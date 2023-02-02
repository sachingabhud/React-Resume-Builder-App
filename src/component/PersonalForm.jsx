import { useState } from 'react';

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  address: "",
  city: "",
  git: "",
  linkedin: ""
};

function PersonalForm(props) {

  const [formValues, setFormValues] = useState(initialValues);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });

  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('personalData', JSON.stringify(formValues));
    props.handleNextStep();
    console.log('sub : ', formValues)
  }

  return (
    <div className='formWrap'>
      <div className='formHead'>
        <h3>Peronsal Information</h3>
      </div>
      <form>
        <div className='rowInputWrapper' >
          <div className='shortInput' >
            <label htmlFor='name'> First Name</label>
            <input type="text" required name="firstName" value={formValues.firstName} onChange={handleInputChange} />
          </div>
          <div className='shortInput' >
            <label htmlFor='name'> Last Name</label>
            <input type="text" required name="lastName" value={formValues.lastName} onChange={handleInputChange} />
          </div>
        </div>
        <div className='rowInputWrapper'  >
          <div className='shortInput' >
            <label htmlFor='email'>Email</label>
            <input type="email" inputMode='email' required name="email" value={formValues.email} onChange={handleInputChange} />
          </div>
          <div className='shortInput'>
            <label htmlFor='number'>Number</label>
            <input type="number" inputMode='numeric' required name="phoneNumber" value={formValues.phoneNumber} onChange={handleInputChange} />
          </div>
        </div>
        <div className='rowInputWrapper'  >
          <div className='shortInput' >
            <label htmlFor='address'>Address</label>
            <input type="text" required name="address" value={formValues.address} onChange={handleInputChange} />
          </div>
          <div className='shortInput'>
            <label htmlFor='city'>City</label>
            <input type="text" required name="city" value={formValues.city} onChange={handleInputChange} />
          </div>
        </div>
        <div>
          <h5>Socials</h5>
        </div>
        <div className='rowInputWrapper'  >
          <div className='shortInput' >
            <label htmlFor='git'>Github</label>
            <input type="url" required name='git' value={formValues.git} onChange={handleInputChange} />
          </div>
          <div className='shortInput' >
            <label htmlFor='social'>Linkedin</label>
            <input type="url" required name='linkedin' value={formValues.linkedin} onChange={handleInputChange} />
          </div>
        </div>
        <div className='stepWrapper'>
          <button disabled>Previous</button>
          <button onClick={onFormSubmit}>Next</button>
        </div>
      </form>
    </div>

  );
}

export default PersonalForm