import Navbar from '../../components/Navbar';
import './style.css';
import Check from "../../assets/check.svg";
import Card from "../../assets/creditcard.svg";


export default function StepSeven({ onSubmit }) {
    return(
        <>
        <Navbar title="Solicitar Empréstimo"/>
        <div className="step-seven">
            <h1>Solicitação Realizada com Sucesso!</h1>
            <div className="resume">
                <p>Resumo da Solicitação</p>
                <div className="blocks">
                    <div className="info-block">
                        <h5>João Paulo Guedes</h5>
                        <h5>71 9988-7766 <img src={Check} alt="check.svg"/></h5>
                    </div>
                    <div className="info-block">
                        <h2>Taxa de Juros</h2>
                        <h3>12% <img src={Check} alt="check.svg"/></h3>
                        
                    </div>
                    <div className="info-block">
                        <div>
                            <img src={Card} alt="creditcard.svg"/>
                            <h5>4327</h5>
                            <p>VISA</p>
                            <h5>02/24</h5>
                        </div>
                        <img src={Check} alt="check.svg"/>
                    </div>
                    <div className="info-block">
                        <h2>Parcelas:</h2>
                        <h3>12 <img src={Check} alt="check.svg"/></h3>
                    </div>
                    <div className="info-block">
                        <h2>Valor desejado:</h2>
                        <h4>R$ 7.200,00 <img src={Check} alt="check.svg"/></h4>
                    </div>
                    <div className="info-block">
                        <h2>Valor da Parcela:</h2>
                        <h4>R$433,33 <img src={Check} alt="check.svg"/></h4>
                    </div>
                    <div className="info-block">
                        <h2>Valor Total do Empréstimo:</h2>
                        <h4>R$ 7.200,00 <img src={Check} alt="check.svg"/></h4>
                    </div>
                </div>
            </div>
            <div className="button-div">
                <button 
                    className="big-blue-button"
                    type="submit"
                    onClick={onSubmit}
                    >Detalhe da Solicitação
                </button>
            </div>
            <p>O CredFica avaliará a solicitação</p>
        </div>
        </>
    );
}