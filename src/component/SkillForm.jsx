import React, { useState } from 'react'
import classes from './SkillForm.module.css'
import { useNavigate } from "react-router-dom";

function SkillForm(props) {

  const navigate = useNavigate();

  const [skillItems, setSkillItem] = useState([]);

  const [skill, setSkill] = useState('')

  const removeSkillItem = (i) => {
    let newForm = [...skillItems];
    newForm.splice(i, 1);
    setSkillItem(newForm)
  }

  const addSkillItem = (e) => {
    e.preventDefault();
    setSkillItem([...skillItems, skill])
  }

  const onFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('skillData', JSON.stringify(skillItems));
    navigate('/preview');
  }

  const onPreviousStep = (e) => {
    e.preventDefault();
    props.handlePrevStep();
  }

  return (
    <div className='formWrap'>
      <div className='formHead'>
        <h3>Skills</h3>
      </div>
      <form>
        <div className={classes.itemInputWrap}>
          <div className={classes.inputWrap} >
            <label htmlFor='skill'> Skill Name</label>
            <input type="text" required id="skill" maxLength='25' onChange={(e) => setSkill(e.target.value)} />
          </div>
          <button onClick={addSkillItem}>Add</button>
        </div>

        <div className={classes.itemWrap}>
          {skillItems.map((item, index) => {
            return (
              <div key={index}>
                <p className={classes.itemBox}>
                  {item ? item : 'item'}
                  <span onClick={() => removeSkillItem(index)}>X</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className='stepWrapper'>
          <button onClick={onPreviousStep} >Previous</button>
          <button onClick={onFormSubmit} >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default SkillForm