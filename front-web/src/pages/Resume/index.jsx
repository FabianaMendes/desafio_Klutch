import Navbar from '../../components/Navbar';
import './style.css';
import Paper from '../../assets/paper.svg';
import Alert from '../../assets/alert.svg';
import CheckMarkCircle from '../../assets/checkmark-circle.svg';
import CreditCard from '../../assets/creditcard.svg';



export default function Resume() {

    function Display() {
        document.getElementById("img1").style.display = "none";
    }

    return(
        <div onLoad={Display}>
        <Navbar title="Detalhe da solicitação"/>
            <div className="final-step">
                <div className="details">
                    <div className="title">Solicitação gerada por <span> Sistema Credfica</span></div>
                    <div className="values">
                        <div>
                            <h1>Valor Total</h1>
                            <h2>R$ 6.000,00</h2>
                        </div>
                        <div>
                            <h1>Valor a Depositar</h1>
                            <h2>R$ 6.000,00</h2>
                        </div>
                    </div>
                    <div className="docs">
                        <div>
                            <h1>Frente do cartão</h1>
                            <img src={Paper} alt="paper.svg"/>
                            <button>Ver Comprovante</button>
                        </div>
                        <div>
                            <h1>Verso do cartão</h1>
                            <img src={Paper} alt="paper.svg"/>
                            <button>Ver Comprovante</button>
                        </div>
                        <div>
                            <h1>Selfie com cartão</h1>
                            <img src={Paper} alt="paper.svg"/>
                            <button>Ver Comprovante</button>
                        </div>
                    </div>
                </div>
                <div className="details">
                    <div className="title">Fluxo da Solicitação: <span>Manual</span></div>
                    <div className="resume-mode">
                        <h5>Modalidade:</h5>
                        <div>
                            <h2>Cartão de crédito<img src={CreditCard} alt="creditcard.svg"/></h2>
                            <h3>Número do cartão: 5252 0565 6526 6552</h3>
                            <h3>Validade: 03/27</h3><h3>CVC: 254</h3>
                            <h3>1 parcelas de: <span>R$ 2000,00</span></h3>
                            <h3>Tabela: Tabela padrão</h3>
                        </div>
                    </div>
                    <div className="resume-client">
                        <h5>Informações do Cliente:</h5>
                        <div>
                            <h4>Nome: Lara B Esquivel</h4>
                            <h4>CPF: 866.666.965.87</h4>
                            <h4>Agência: 1235</h4>
                            <h4>Banco: 029 - Banco Itaú Consignado S.A.</h4>
                            <h4>Tipo de Conta: Poupança</h4>
                            <h4>Número da conta: 222245</h4>
                        </div>
                    </div>
                    <div className="general">
                        <h5>Informações Gerais:</h5>
                        <div>
                            <h4>Data: 09/03/2020</h4>
                            <button id="waiting"><img src={Alert} alt="alert.svg"/>Aguardando</button>
                            <button id="preaprove"><img src={CheckMarkCircle} alt="checkmarkcircle.svg"/>Pré Aprovar</button>
                            <button id="disapprove"><img src={Alert} alt="alert.svg"/>Reprovar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}