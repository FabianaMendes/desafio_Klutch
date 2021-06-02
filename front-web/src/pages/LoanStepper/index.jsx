import { useEffect, useState } from 'react';
import './style.css';
import StepOne from '../StepOne';
import StepThree from '../StepThree';
import StepFour from '../StepFour';
import StepFive from '../StepFive';
import StepSix from '../StepSix';
import StepSeven from '../StepSeven';
import Resume from '../Resume';

export default function LoanStepper({ onSubmit }) {

    const [currentStep, setCurrentStep] = useState(0);
    const [collectedData, setData] = useState({});

    useEffect(()=>{
        if(currentStep === installmentForms.length-2){
            onSubmit(collectedData);
        }
    })

    const installmentForms = [
        <StepOne onSubmit={collectData}/>,
        <StepThree onSubmit={collectData}/>,
        <StepFour onSubmit={collectData}/>,
        <StepFive onSubmit={collectData}/>,
        <StepSix 
            onSubmit={collectData}
        />,
        <StepSeven onSubmit={collectData}/>,
        <Resume />
    ];

    function collectData(data){
        setData({...collectedData, ...data});
        next();
    }

    function next(){
        setCurrentStep(currentStep + 1);
    }

    return(
        <>
            { installmentForms[currentStep] }
        </>
    );
}