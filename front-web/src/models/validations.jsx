function validateValue(desiredValue) {
  let min = parseFloat(document.getElementById('min').value);
  let max = parseFloat(document.getElementById('max').value);
  let val = parseFloat(document.getElementById('desiredValue').value);
    if (val < min || val > max ) {
      return ({ valid: false, text: "Somente estão autorizados valores entre R$300,00 e R$10.000,00" });
    } else {
      return ({ valid: true, text: "" });
    }
}

function validateField(field) {
  if (field.length === 0 || field.value === "") {
    return ({ valid: false, text: "Preenchimento obrigatório" });
  } else {
    return { valid: true, text: "" };
  }
}

function validateCpf(cpf) {
  if (cpf.length !== 11 ) {
    return ({ valid: false, text: "CPF inválido" });
  } else {
    return { valid: true, text: "" };
  }
}

function validateCardNumber(cardNumber) {
  if (cardNumber.length !== 19 ) {
    return ({ valid: false, text: "Cartão inválido" });
  } else {
    return { valid: true, text: "" };
  }
}

function validateValidThru(validThru) {
  if (validThru.length !== 5 ) {
    return ({ valid: false, text: "Data inválida" });
  } else {
    return { valid: true, text: "" };
  }
}

function validateCvc(cvc) {
  if (cvc.length !== 3 ) {
    return ({ valid: false, text: "Código de verificação inválido" });
  } else {
    return { valid: true, text: "" };
  }
}

function validateContractType(contractType) {
  if (contractType.value === "" ) {
    return ({ valid: false, text: "Escolha um tipo de contrato" });
  } else {
    return { valid: true, text: "" };
  }
}

export { validateValue, validateField, validateCpf, validateCardNumber, validateValidThru, validateCvc, validateContractType};