import { useContext, useState } from 'react';
import Navbar from '../../components/Navbar';
import SendingValidations from '../../contexts/SendingValidations';
import useErrors from '../../hooks/useErrors';
import { mask, unMask } from "remask";
import './style.css';


export default function StepFive({ onSubmit }) {

    const validations = useContext(SendingValidations);
    const [errors, validateInput, canSubmit] = useErrors(validations);
    const [cardNumber, setCardNumber] = useState("");
    const [validThru, setValidThru] = useState("");
    const [cvc, setCvc] = useState("");
    const [photoFront, setPhotoFront] = useState("");
    const [photoBack, setPhotoBack] = useState("");
    const [selfie, setSelfie] = useState("");



    return (
        <>
            <Navbar title="Solicitar Empréstimo" />
            <form onSubmit={(event) => {
                event.preventDefault();
                if (canSubmit()) {
                    onSubmit({ cardNumber, validThru, cvc, photoFront, photoBack, selfie });
                }
            }}>
                <div className="steper-container">
                    <section>
                        <h1>Insira os dados do Cartão:</h1>
                        <label>Lara B Esquivel</label>
                        <div className="input-block">
                            <input
                                required
                                type="text"
                                id="cardNumber"
                                name="cardNumber"
                                value={cardNumber}
                                placeholder="000000000000"
                                onChange={(event) => {
                                    setCardNumber(mask(unMask(event.target.value), ['9999 9999 9999 9999']));
                                }}
                                onBlur={validateInput}
                            />
                            <div className="error">{errors.cardNumber.text}</div>
                        </div>
                        <div className="input-block">
                            <input
                                required
                                type="text"
                                id="validThru"
                                name="validThru"
                                value={validThru}
                                placeholder="Data de Validade"
                                onChange={(event) => {
                                    setValidThru(mask(unMask(event.target.value), ['99/99']));
                                }}
                                onBlur={validateInput}
                            />
                            <div className="error">{errors.validThru.text}</div>
                        </div>
                        <div className="input-block">
                            <input
                                required
                                type="text"
                                id="cvc"
                                name="cvc"
                                value={cvc}
                                placeholder="CVC"
                                onChange={(event) => {
                                    setCvc(event.target.value);
                                }}
                                onBlur={validateInput}
                            />
                            <div className="error">{errors.cvc.text}</div>
                        </div>
                    </section>

                    <section>
                        <h1>Faça o upload dos anexos do Cartão:</h1>
                        <div className="download">
                            <div className="input-block">
                                <input
                                    type="text"
                                    value={photoFront}
                                    onChange={(event)=>{setPhotoFront(event.target.value)}}
                                    id="photoFront"
                                    />
                                <button>Adicionar</button>
                            </div>
                        </div>
                        <div className="download">
                            <div className="input-block">
                                <input
                                    type="text"
                                    value={photoBack}
                                    onChange={(event)=>{setPhotoBack(event.target.value)}}
                                    id="photoBack"
                                    />
                                <button>Adicionar</button>  
                            </div>
                        </div>
                        <div className="download">
                            <div className="input-block">
                                <input
                                    type="text"
                                    value={selfie}
                                    onChange={(event)=>{setSelfie(event.target.value)}}
                                    id="selfie"
                                />
                                <button>Adicionar</button>
                            </div>
                        </div>
                        <div className="downloads-footer">
                            <h1>Atenção: As fotos devem estar legíveis, com todas as informações visíveis do cartão.</h1>
                        </div>
                    </section>
                </div>
                <div className="button-container">
                    <button 
                        className="big-blue-button" 
                        type="submit"
                        >Continuar
                    </button>
                </div>
            </form>
        </>
    );
}