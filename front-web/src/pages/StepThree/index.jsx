import { useContext, useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import SendingValidations from '../../contexts/SendingValidations';
import useErrors from '../../hooks/useErrors';
import './style.css';
import { getClients } from '../../api';


export default function StepThree({ onSubmit }) {

    const validations = useContext(SendingValidations);
    const [errors, validateInput, canSubmit] = useErrors(validations);
    const [cpf, setCpf] = useState("");
    const [divResponse, setDivResponse] = useState();

    useEffect(() => {
        getClients()
        .then(response => {
            console.log(response.data);
            setDivResponse(<ResponseContainer />);
        })
        .catch(()=>{
            alert('Clientes não encontrados');
        })
    }, []);
        

    function ResponseContainer(){
        return(
            <>
            <h2>Cliente encontrado</h2>
            <h3>074.119.055-93</h3>
            <h4>Lara Test</h4>
            <button className="big-blue-button" type="submit">Solicitar</button>
            </>
        );
    }

    return (
        <>
        <Navbar title="Solicitar Empréstimo"/>
            <form onSubmit={(event)=>{
                event.preventDefault();
                if(canSubmit()){
                onSubmit({cpf});
                }
            }}>
                <div className="step3-container">
                    <label>Busque o Cliente</label>
                        <div className="search-cpf">
                            <div className="input-block">
                                <input
                                    required
                                    type="text"
                                    id="cpf"
                                    name="cpf"
                                    value={cpf}
                                    placeholder=""
                                    onChange={(event) => {
                                        setCpf(event.target.value);
                                    }}
                                    onBlur={validateInput}
                                />
                                <button 
                                    type="submit"
                                    className="small-blue-button"
                                    onClick={(event)=>{
                                        event.preventDefault(); 
                                        
                                    }}
                                    >Buscar
                                </button>
                            </div>
                            <div className="error">{errors.cpf.text}</div>
                        </div>
                        <div className="result-container">
                            {divResponse}
                        </div>
                </div>
            </form>
            
        </>
    );
}