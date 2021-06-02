import { useState } from 'react';
import Navbar from '../../components/Navbar';
import './style.css';
import CheckMark from "../../assets/checkmark.svg";


export default function StepSix({ onSubmit }) {

    const [contractType, setContractType] = useState("");
    const [automatic, setAutomatic] = useState(false);
    const [manual, setManual] = useState(false);

    function handleAuto(event) {
        event.preventDefault();
        setContractType("Automático");
        setAutomatic(true);
        if(manual === true){
            setManual(false);
        }
    }
    function handleManual(event) {
        event.preventDefault();
        setContractType("Manual");
        setManual(true);
        if(automatic === true){
            setAutomatic(false);
        }
    }

    return (
        <>
            <Navbar title="Solicitar Empréstimo" />
            <div className="step-six">
                <form onSubmit={(event) => {
                    event.preventDefault();
                    onSubmit({ contractType });
                }}>
                    <div className="table-selector">
                        <label>Tabela</label>
                        <input
                            readOnly
                            type="text"
                            placeholder="Tabela Padrão"
                            name="table"
                        />
                    </div>
                    <div className="body">
                        <div className="input-block">
                            <label>Valor Desejado:</label>
                            <input
                                readOnly
                                type="text"
                                placeholder="R$ 3.000,00"
                            />
                        </div>
                        <div className="input-block">
                            <label>Valor Total do Empréstimo:</label>
                            <input
                                readOnly
                                type="text"
                                placeholder="R$ 3.300,00"
                            />
                        </div>
                        <div className="input-block">
                            <label>Parcelas:</label>
                            <input
                                readOnly
                                type="text"
                                placeholder="3"
                            />
                        </div>
                        <div className="input-block">
                            <label>Valor da parcela:</label>
                            <input
                                readOnly
                                type="text"
                                placeholder="R$ 3.100,00"
                            />
                        </div>
                        <p>Escolha o tipo de contrato:</p>
                        <div className="buttons">
                            <div>
                                <button 
                                    className={automatic ? "selected" : "type-button"} 
                                    type="submit"
                                    value={contractType} 
                                    onClick={handleAuto}>Automático
                                </button>
                                <button 
                                    className={manual ? "selected" : "type-button"} 
                                    type="submit"
                                    value={contractType}
                                    onClick={handleManual}>Manual
                                </button>
                            </div>
                            <button
                                type="submit"
                                className="big-blue-button"
                                onClick={(event) => {
                                    if (contractType === ""){
                                        event.preventDefault();
                                        alert("Escolha um tipo de contrato");
                                    } else {
                                        setContractType(contractType);
                                    }
                                }}
                            ><img src={CheckMark} alt="checkmark.svg" />Concluir</button>
                        </div>
                    </div>
                </form>
                <div className="footer-table">
                    <div className="table-content">
                        <h2>Tabela Padrão</h2>
                        <table>
                            <thead>
                                <tr className="table-head">
                                    <th>Parcela</th>
                                    <th>Juros da Parcela</th>
                                    <th>Valor Parcela</th>
                                    <th>Valor Total</th>
                                    <th>Comissão Parceiro</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>15%</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>20%</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>25%</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                </tr>
                                <tr>
                                    <td>4</td>
                                    <td>30%</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                </tr>
                                <tr>
                                    <td>5</td>
                                    <td>15%</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                </tr>
                                <tr>
                                    <td>6</td>
                                    <td>20%</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                </tr>
                                <tr>
                                    <td>7</td>
                                    <td>25%</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                </tr>
                                <tr>
                                    <td>8</td>
                                    <td>30%</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                </tr>
                                <tr>
                                    <td>9</td>
                                    <td>30%</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                </tr>
                                <tr>
                                    <td>10</td>
                                    <td>30%</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                    <td>R$1.115,00</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}