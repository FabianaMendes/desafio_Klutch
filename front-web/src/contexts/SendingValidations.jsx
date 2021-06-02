import React from 'react';

const SendingValidations = React.createContext({
    amount:noValidate,
    field:noValidate
});

function noValidate(values){
    console.log(values);
    return { valid:true, text:"" }
};

export default SendingValidations;