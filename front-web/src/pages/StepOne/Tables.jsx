import { useState } from 'react';
import './style.css';
import {formatCurrency, select} from '../../models/helpers';

export default function Tables({ onSubmit, desiredValue }) {
   
    const [table, setTable] = useState("");
    const [rateTableId, setRateTableId] = useState("");
    const [installments, setInstallments] = useState("");
    const [installmentId, setInstallmentId] = useState("");
    const [installmentInterest, setInstallmentInterest] = useState("");
    const [installmentInterestValue, setInstallmentInterestValue] = useState("");
    const [installmentValue, setInstallmentValue] = useState("");
    const [comission, setComission] = useState("");
    const [comissionValue, setComissionValue] = useState("");
    const [totalLoan, setTotalLoan] = useState("");
    const [isSelected, setSelected] = useState(false);

    const percentageComission = (0.005);
    

    return (
        <>
            <div className="step-two">
                <form onSubmit={(event)=>{
                    event.preventDefault();
                    onSubmit({ 
                        installments, installmentId,
                        installmentInterest, installmentInterestValue, 
                        comission, comissionValue, 
                        desiredValue, totalLoan,
                        table, rateTableId, 
                        installmentValue});
                }}>
                    <div className="tables-list">
                        <div className="table-container">
                            <div className="radio-container">
                                <input 
                                    type="radio" 
                                    name="radio"
                                    className="radio" 
                                    value={"Tabela Padrão 1"} 
                                    onClick={(event) => {
                                        setRateTableId(1);
                                        setTable(event.target.value);
                                        select();
                                }}/>
                            </div>
                            <div className="table-content">
                                <h2>Tabela Padrão 1</h2>
                                <table id="table">
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
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(1);
                                                setInstallmentId(1);
                                                setInstallmentInterest(1);
                                                setInstallmentValue(((desiredValue/1)*1.01));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/1)*1.01)*1)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/1)*1.01)*1))-desiredValue);
                                                setTotalLoan((((desiredValue/1)*1.01)*1));
                                                select();
                                            }}>
                                            <td>1</td>
                                            <td>1%</td>
                                            <td>{formatCurrency((desiredValue/1)*1.01)}</td> 
                                            <td>{formatCurrency(((desiredValue/1)*1.01)*1)}</td>
                                            <td>{formatCurrency((((desiredValue/1)*1.01)*1)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(2);
                                                setInstallmentId(2);
                                                setInstallmentInterest(2);
                                                setInstallmentValue(((desiredValue/2)*1.02));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/2)*1.02)*2)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/2)*1.02)*2))-desiredValue);
                                                setTotalLoan((((desiredValue/2)*1.02)*2));
                                                select();
                                            }}>
                                            <td>2</td>
                                            <td>2%</td>
                                            <td>{formatCurrency((desiredValue/2)*1.02)}</td> 
                                            <td>{formatCurrency(((desiredValue/2)*1.02)*2)}</td>
                                            <td>{formatCurrency((((desiredValue/2)*1.02)*2)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(3);
                                                setInstallmentId(3);
                                                setInstallmentInterest(3);
                                                setInstallmentValue(((desiredValue/3)*1.03));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/3)*1.03)*3)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/3)*1.03)*3))-desiredValue);
                                                setTotalLoan((((desiredValue/3)*1.03)*3));
                                                select();
                                            }}>
                                            <td>3</td>
                                            <td>3%</td>
                                            <td>{formatCurrency((desiredValue/3)*1.03)}</td> 
                                            <td>{formatCurrency(((desiredValue/3)*1.03)*3)}</td>
                                            <td>{formatCurrency((((desiredValue/3)*1.03)*3)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(4);
                                                setInstallmentId(4);
                                                setInstallmentInterest(4);
                                                setInstallmentValue(((desiredValue/4)*1.04));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/4)*1.04)*4)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/4)*1.04)*4))-desiredValue);
                                                setTotalLoan((((desiredValue/4)*1.04)*4));
                                                select();
                                            }}>
                                            <td>4</td>
                                            <td>4%</td>
                                            <td>{formatCurrency((desiredValue/4)*1.04)}</td> 
                                            <td>{formatCurrency(((desiredValue/4)*1.04)*4)}</td>
                                            <td>{formatCurrency((((desiredValue/4)*1.04)*4)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(5);
                                                setInstallmentId(5);
                                                setInstallmentInterest(5);
                                                setInstallmentValue(((desiredValue/5)*1.05));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/5)*1.05)*5)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/5)*1.05)*5))-desiredValue);
                                                setTotalLoan((((desiredValue/5)*1.05)*5));
                                                select();
                                            }}>
                                            <td>5</td>
                                            <td>5%</td>
                                            <td>{formatCurrency((desiredValue/5)*1.05)}</td> 
                                            <td>{formatCurrency(((desiredValue/5)*1.05)*5)}</td>
                                            <td>{formatCurrency((((desiredValue/5)*1.05)*5)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(6);
                                                setInstallmentId(6);
                                                setInstallmentInterest(6);
                                                setInstallmentValue(((desiredValue/6)*1.06));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/6)*1.06)*6)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/6)*1.06)*6))-desiredValue);
                                                setTotalLoan((((desiredValue/6)*1.06)*6));
                                                select();
                                            }}>
                                            <td>6</td>
                                            <td>6%</td>
                                            <td>{formatCurrency((desiredValue/6)*1.06)}</td> 
                                            <td>{formatCurrency(((desiredValue/6)*1.06)*6)}</td>
                                            <td>{formatCurrency((((desiredValue/6)*1.06)*6)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(7);
                                                setInstallmentId(7);
                                                setInstallmentInterest(7);
                                                setInstallmentValue(((desiredValue/7)*1.07));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/7)*1.07)*7)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/7)*1.07)*7))-desiredValue);
                                                setTotalLoan((((desiredValue/7)*1.07)*7));
                                                select();
                                            }}>
                                            <td>7</td>
                                            <td>7%</td>
                                            <td>{formatCurrency((desiredValue/7)*1.07)}</td> 
                                            <td>{formatCurrency(((desiredValue/7)*1.07)*7)}</td>
                                            <td>{formatCurrency((((desiredValue/7)*1.07)*7)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(8);
                                                setInstallmentId(8);
                                                setInstallmentInterest(8);
                                                setInstallmentValue(((desiredValue/8)*1.08));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/8)*1.08)*8)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/8)*1.08)*8))-desiredValue);
                                                setTotalLoan((((desiredValue/8)*1.08)*8));
                                                select();
                                            }}>
                                            <td>8</td>
                                            <td>8%</td>
                                            <td>{formatCurrency((desiredValue/8)*1.08)}</td> 
                                            <td>{formatCurrency(((desiredValue/8)*1.08)*8)}</td>
                                            <td>{formatCurrency((((desiredValue/8)*1.08)*8)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(9);
                                                setInstallmentId(9);
                                                setInstallmentInterest(9);
                                                setInstallmentValue(((desiredValue/9)*1.09));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/9)*1.09)*9)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/9)*1.09)*9))-desiredValue);
                                                setTotalLoan((((desiredValue/9)*1.09)*9));
                                                select();
                                            }}>
                                            <td>9</td>
                                            <td>9%</td>
                                            <td>{formatCurrency((desiredValue/9)*1.09)}</td> 
                                            <td>{formatCurrency(((desiredValue/9)*1.09)*9)}</td>
                                            <td>{formatCurrency((((desiredValue/9)*1.09)*9)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(10);
                                                setInstallmentId(10);
                                                setInstallmentInterest(10);
                                                setInstallmentValue(((desiredValue/10)*1.010));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/10)*1.010)*10)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/10)*1.010)*10))-desiredValue);
                                                setTotalLoan((((desiredValue/10)*1.010)*10));
                                                select();
                                            }}>
                                            <td>10</td>
                                            <td>10%</td>
                                            <td>{formatCurrency((desiredValue/10)*1.010)}</td> 
                                            <td>{formatCurrency(((desiredValue/10)*1.010)*10)}</td>
                                            <td>{formatCurrency((((desiredValue/10)*1.010)*10)*percentageComission)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="table-container">
                            <div className="radio-container">
                                <input 
                                    type="radio" 
                                    name="radio"
                                    className="radio" 
                                    value={"Tabela Padrão 2"} 
                                    onClick={(event) => {
                                        setRateTableId(2);
                                        setTable(event.target.value);
                                        select();
                                }}/>
                            </div>
                            <div className="table-content">
                                <h2>Tabela Padrão 2</h2>
                                <table id="table">
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
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(1);
                                                setInstallmentId(1);
                                                setInstallmentInterest(1);
                                                setInstallmentValue(((desiredValue/1)*1.01));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/1)*1.01)*1)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/1)*1.01)*1))-desiredValue);
                                                setTotalLoan((((desiredValue/1)*1.01)*1));
                                                select();
                                            }}>
                                            <td>1</td>
                                            <td>1%</td>
                                            <td>{formatCurrency((desiredValue/1)*1.01)}</td> 
                                            <td>{formatCurrency(((desiredValue/1)*1.01)*1)}</td>
                                            <td>{formatCurrency((((desiredValue/1)*1.01)*1)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(2);
                                                setInstallmentId(2);
                                                setInstallmentInterest(2);
                                                setInstallmentValue(((desiredValue/2)*1.02));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/2)*1.02)*2)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/2)*1.02)*2))-desiredValue);
                                                setTotalLoan((((desiredValue/2)*1.02)*2));
                                                select();
                                            }}>
                                            <td>2</td>
                                            <td>2%</td>
                                            <td>{formatCurrency((desiredValue/2)*1.02)}</td> 
                                            <td>{formatCurrency(((desiredValue/2)*1.02)*2)}</td>
                                            <td>{formatCurrency((((desiredValue/2)*1.02)*2)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(3);
                                                setInstallmentId(3);
                                                setInstallmentInterest(3);
                                                setInstallmentValue(((desiredValue/3)*1.03));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/3)*1.03)*3)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/3)*1.03)*3))-desiredValue);
                                                setTotalLoan((((desiredValue/3)*1.03)*3));
                                                select();
                                            }}>
                                            <td>3</td>
                                            <td>3%</td>
                                            <td>{formatCurrency((desiredValue/3)*1.03)}</td> 
                                            <td>{formatCurrency(((desiredValue/3)*1.03)*3)}</td>
                                            <td>{formatCurrency((((desiredValue/3)*1.03)*3)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(4);
                                                setInstallmentId(4);
                                                setInstallmentInterest(4);
                                                setInstallmentValue(((desiredValue/4)*1.04));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/4)*1.04)*4)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/4)*1.04)*4))-desiredValue);
                                                setTotalLoan((((desiredValue/4)*1.04)*4));
                                                select();
                                            }}>
                                            <td>4</td>
                                            <td>4%</td>
                                            <td>{formatCurrency((desiredValue/4)*1.04)}</td> 
                                            <td>{formatCurrency(((desiredValue/4)*1.04)*4)}</td>
                                            <td>{formatCurrency((((desiredValue/4)*1.04)*4)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(5);
                                                setInstallmentId(5);
                                                setInstallmentInterest(5);
                                                setInstallmentValue(((desiredValue/5)*1.05));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/5)*1.05)*5)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/5)*1.05)*5))-desiredValue);
                                                setTotalLoan((((desiredValue/5)*1.05)*5));
                                                select();
                                            }}>
                                            <td>5</td>
                                            <td>5%</td>
                                            <td>{formatCurrency((desiredValue/5)*1.05)}</td> 
                                            <td>{formatCurrency(((desiredValue/5)*1.05)*5)}</td>
                                            <td>{formatCurrency((((desiredValue/5)*1.05)*5)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(6);
                                                setInstallmentId(6);
                                                setInstallmentInterest(6);
                                                setInstallmentValue(((desiredValue/6)*1.06));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/6)*1.06)*6)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/6)*1.06)*6))-desiredValue);
                                                setTotalLoan((((desiredValue/6)*1.06)*6));
                                                select();
                                            }}>
                                            <td>6</td>
                                            <td>6%</td>
                                            <td>{formatCurrency((desiredValue/6)*1.06)}</td> 
                                            <td>{formatCurrency(((desiredValue/6)*1.06)*6)}</td>
                                            <td>{formatCurrency((((desiredValue/6)*1.06)*6)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(7);
                                                setInstallmentId(7);
                                                setInstallmentInterest(7);
                                                setInstallmentValue(((desiredValue/7)*1.07));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/7)*1.07)*7)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/7)*1.07)*7))-desiredValue);
                                                setTotalLoan((((desiredValue/7)*1.07)*7));
                                                select();
                                            }}>
                                            <td>7</td>
                                            <td>7%</td>
                                            <td>{formatCurrency((desiredValue/7)*1.07)}</td> 
                                            <td>{formatCurrency(((desiredValue/7)*1.07)*7)}</td>
                                            <td>{formatCurrency((((desiredValue/7)*1.07)*7)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(8);
                                                setInstallmentId(8);
                                                setInstallmentInterest(8);
                                                setInstallmentValue(((desiredValue/8)*1.08));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/8)*1.08)*8)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/8)*1.08)*8))-desiredValue);
                                                setTotalLoan((((desiredValue/8)*1.08)*8));
                                                select();
                                            }}>
                                            <td>8</td>
                                            <td>8%</td>
                                            <td>{formatCurrency((desiredValue/8)*1.08)}</td> 
                                            <td>{formatCurrency(((desiredValue/8)*1.08)*8)}</td>
                                            <td>{formatCurrency((((desiredValue/8)*1.08)*8)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(9);
                                                setInstallmentId(9);
                                                setInstallmentInterest(9);
                                                setInstallmentValue(((desiredValue/9)*1.09));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/9)*1.09)*9)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/9)*1.09)*9))-desiredValue);
                                                setTotalLoan((((desiredValue/9)*1.09)*9));
                                                select();
                                            }}>
                                            <td>9</td>
                                            <td>9%</td>
                                            <td>{formatCurrency((desiredValue/9)*1.09)}</td> 
                                            <td>{formatCurrency(((desiredValue/9)*1.09)*9)}</td>
                                            <td>{formatCurrency((((desiredValue/9)*1.09)*9)*percentageComission)}</td>
                                        </tr>
                                        <tr className={isSelected ? "selected" : "" } 
                                            onClick={()=> { 
                                                setInstallments(10);
                                                setInstallmentId(10);
                                                setInstallmentInterest(10);
                                                setInstallmentValue(((desiredValue/10)*1.010));
                                                setComission(percentageComission);
                                                setComissionValue((((desiredValue/10)*1.010)*10)*percentageComission);
                                                setInstallmentInterestValue(((((desiredValue/10)*1.010)*10))-desiredValue);
                                                setTotalLoan((((desiredValue/10)*1.010)*10));
                                                select();
                                            }}>
                                            <td>10</td>
                                            <td>10%</td>
                                            <td>{formatCurrency((desiredValue/10)*1.010)}</td> 
                                            <td>{formatCurrency(((desiredValue/10)*1.010)*10)}</td>
                                            <td>{formatCurrency((((desiredValue/10)*1.010)*10)*percentageComission)}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    
                    </div>
                    <div className="footer">
                        <div>
                            <h1>Nome: {table}</h1>
                            <h1>Parcelas: {installments}</h1>
                            <h1>Valor da Parcela: {formatCurrency(installmentValue)}</h1>
                        </div>
                        <button 
                            type="submit"
                            className="orange-button" 
                            >Avançar
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}