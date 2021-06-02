import { useContext, useState } from 'react';
import Navbar from '../../components/Navbar';
import SendingValidations from '../../contexts/SendingValidations';
import useErrors from '../../hooks/useErrors';
import Tables from './Tables';
import { mask, unMask } from "remask";
import './style.css';

export default function StepOne({ onSubmit }) {

    const validations = useContext(SendingValidations);
    const [errors, validateInput, canSubmit] = useErrors(validations);
    const [container, setContainer] = useState(initial);
    const [desiredValue, setDesiredValue] = useState("");

    function initial() {
        return(
            <div/>
        );
    }

    function LoadComponent(event) {
        event.preventDefault();
        setContainer(<Tables desiredValue={desiredValue} onSubmit={onSubmit}/>);
        console.log(desiredValue);
    }

    return (
        <>
        <Navbar title="Simulação de Taxas" />
        <div className="step-one">
            <div className="value-container">
                <div className="value-field">
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        if(canSubmit()){
                            onSubmit({desiredValue});
                        }
                    }}>
                        <input id="min" value="300" readOnly/>
                        <input id="max" value="10000" readOnly/>
                        <div className="input-block">
                            <label>Valor Desejado</label>
                            <input
                                required
                                type="text"
                                id="desiredValue"
                                name="desiredValue"
                                value={desiredValue}
                                placeholder="R$ 0,00"
                                onChange={(event) => {
                                    setDesiredValue(mask(unMask(event.target.value), ['9.99','99.99','999.99', '9999.99', '99999.99']));
                                }}
                                onBlur={validateInput}
                            />
                        </div>
                        <div className="btn-ctn">
                            <button 
                                type="submit"
                                className="orange-button"
                                onClick={LoadComponent}
                                >Calcular
                            </button>
                        </div> 
                    </form>
                    <div className="error">{errors.desiredValue.text}</div>
                </div>
            </div>
        </div>                        
        {container}
        </>
    );
}