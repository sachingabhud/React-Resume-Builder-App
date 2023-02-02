import React, { useState } from "react";
import PersonalForm from "../component/PersonalForm";
import SkillForm from "../component/SkillForm";
import ExperienceForm from "../component/ExperienceForm";
import EducationForm from "../component/EducationForm";

function Details() {
    const [step, setstep] = useState(1);

    const nextStep = () => {
        setstep(step + 1);
    };

    const prevStep = () => {
        setstep(step - 1);
    };

    switch (step) {
        case 1:
            return <PersonalForm handleNextStep={nextStep} />;

        case 2:
            return <EducationForm handleNextStep={nextStep} handlePrevStep={prevStep} />


        case 3:
            return <ExperienceForm handleNextStep={nextStep} handlePrevStep={prevStep} />

        case 4:
            return <SkillForm handlePrevStep={prevStep} />;

        default:
            console.log('default');
        break;
    }
}

export default Details;
