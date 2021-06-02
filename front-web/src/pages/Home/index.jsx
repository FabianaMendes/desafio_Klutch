import { Component } from 'react';
import { saveSolicitation } from '../../api';
import SendingValidations from '../../contexts/SendingValidations';
import { validateValue, validateCpf, validateField, validateCardNumber, validateValidThru, validateCvc, validateContractType } from '../../models/validations';
import LoanStepper from '../LoanStepper';
import './style.css';


export default class Home extends Component {
    render() {
        return(
            <SendingValidations.Provider 
                value={{
                    desiredValue:validateValue, 
                    cpf:validateCpf,
                    cardNumber:validateCardNumber, 
                    validThru:validateValidThru, 
                    cvc:validateCvc, 
                    contractType: validateContractType,
                    field:validateField
                }}>
                <LoanStepper onSubmit={onSubmit}/>
            </SendingValidations.Provider>
        );
    }
}

function onSubmit(values){
    saveSolicitation(values);
    console.log(values);
}
