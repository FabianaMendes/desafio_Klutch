export type Client = {
    id: number;
    name: string;
    phone: string;
    cpf: string;
    bank: Bank;
}

export type Bank = {
    id: number;
    label: string;
    accountTypeLabel: string;
    accountNumber: string; 
}

export type Solicitation = {
    id: number;
    clientId: number;
    installmentInterest: number;
    installmentInterestValue: number;
    comission: number;
    comissionValue: number;
    installmentValue: number;
    cardNumber: string;
    desiredValue: number;
    totalLoan: number;
    installmentId: number;
    rateTableId: number;
}

export type RateTable = {
    id: number;
    name: string;
    installments: Installment[];
}

export type Installment = {
    id: number;
    installmentNumber: number;
    installmentInterest: number;
    installmentValue: number;
    totalLoan: number;
    comission: number;
}

