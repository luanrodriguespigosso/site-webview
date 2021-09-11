document.querySelector('#name').oninvalid = function() {

    // remove mensagens de erro antigas
    this.setCustomValidity("");

    // reexecuta validação
    if (!this.validity.valid) {

        // se inválido, coloca mensagem de erro
        this.setCustomValidity("Caracter invalido! Insira somente letras.");
    }
};

document.querySelector('#check-politica').oninvalid = function() {

    // remove mensagens de erro antigas
    this.setCustomValidity("");

    // reexecuta validação
    if (!this.validity.valid) {

        // se inválido, coloca mensagem de erro
        this.setCustomValidity("Para prosseguir você precisa ler e aceitar a nossa política de privacidade.");
    }
};
