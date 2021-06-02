import { useState } from 'react';
import Navbar from '../../components/Navbar';
import './style.css';


export default function StepFour({ onSubmit }) {

    const [paymentMode, setPaymentMode] = useState("");
    
    return(
        <>
        <Navbar title="Solicitar Empréstimo"/>
        <form onSubmit={(event)=>{
                event.preventDefault();
                onSubmit({paymentMode});
        }}>
            <div className="paymentMode-container">
                <h1>Escolha a modalidade:</h1>
                <button 
                    className="big-blue-button" 
                    type="submit" 
                    value={paymentMode} 
                    onClick={()=>{
                        setPaymentMode("Cartão de Crédito");
                    }}
                    ><p>Cartão de Crédito</p>
                </button>
                <h2>Ou</h2>
                <div className="mode-inactive">
                    <div className="inactiveButton">Crédito Consignado</div>
                    <p>Em Breve</p>
                </div>
            </div>
        </form>
        </>
    );
}