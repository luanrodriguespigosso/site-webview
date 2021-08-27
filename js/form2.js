document.querySelector('#name').oninvalid = function() {

    // remove mensagens de erro antigas
    this.setCustomValidity("");

    // reexecuta validação
    if (!this.validity.valid) {

        // se inválido, coloca mensagem de erro
        this.setCustomValidity("Caracter invalido! Insira somente letras.");
    }
};
