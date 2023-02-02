import React from 'react'
import { PDFExport } from '@progress/kendo-react-pdf';
import classes from "./Preview.module.css";
import { useNavigate } from "react-router-dom";

const Preview = () => {

  const navigate = useNavigate();

  const container = React.useRef(null);

  const exportPDFWithComponent = () => {
    if (container.current) {
      container.current.save();
    }
  };

  const personal = JSON.parse(localStorage.getItem('personalData'));
  const education = JSON.parse(localStorage.getItem('educationData'));
  const experience = JSON.parse(localStorage.getItem('experienceData'));
  const skill = JSON.parse(localStorage.getItem('skillData'));

  return (
    <div className={classes.mainWrap}>
      <div className={classes.downloadWrap}>
        <button onClick={exportPDFWithComponent}>
          Download PDF
        </button>
        <span>--- OR ---</span>
        <button onClick={() => navigate('/details')}>
          Create a new
        </button>
      </div>

      <div className={classes.resumeWrap}>
        <PDFExport ref={container} paperSize="A4" margin={20} fileName={'sample'} multiPage={"false"}>
          <div className={classes.previewWrap}>
            <div className={classes.headWrap}>
              <h2>{personal.firstName} {personal.lastName}</h2>
              <div className={classes.info}>
                <p>{personal.address} | {personal.city}</p>
                <p>{personal.email}</p>
                <p>{personal.phoneNumber}</p>
                <p>{personal.git.replace(/^https?:\/\//, '')}</p>
                <p>{personal.linkedin.replace(/^https?:\/\//, '')}</p>
              </div>
            </div>

            <div className={classes.detailWrapper}>
              <div className={classes.leftWrap}>
                <div className={classes.sectionWrap}>
                  <h3>Education</h3>
                  {education.map((item, index) => {
                    return (
                      <div key={index} className={classes.itemWrap}>
                        <h4>{item.school}</h4>
                        <p>{item.degree} | {item.startMonth} - {item.endMonth}</p>
                      </div>
                    )
                  })}
                </div>

                <div className={classes.sectionWrap}>
                  <h3>Experience</h3>
                  {experience.map((exp, index) => {
                    return (
                      <div key={index} className={classes.itemWrap}>
                        <h4>{exp.company}</h4>
                        <p>{exp.job} | {exp.startMonth} - {exp.endMonth}</p>
                        <h6>{exp.description}</h6>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className={classes.rightWrap}>
                <div className={classes.sectionWrap}>
                  <h3>Skills</h3>
                  <div className={classes.skillWrap}>
                    {skill.map((item) => {
                      return (
                        <span>{item}</span>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </PDFExport>
      </div>

    </div>
  )

};

export default Preview