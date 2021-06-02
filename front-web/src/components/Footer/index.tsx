import './style.css';

type Props = {
    tableName: string;
    installments: number;
    installmentValue: number;
    onSubmit: () => void;
}

export default function Footer({ tableName, installments, installmentValue, onSubmit } : Props) {
    return(
        <div className="table-footer">
            <div>
                <h1>Nome: {tableName}</h1>
                <h1>Parcelas: {installments}</h1>
                <h1>Valor da Parcela: {installmentValue}</h1>
            </div>
            <button className="orange-button" onClick={onSubmit} >Avançar</button>
        </div>
    );
}