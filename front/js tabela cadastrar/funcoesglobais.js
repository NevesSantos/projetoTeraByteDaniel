function btnHidden(){
    if (hidden) {
        btnCadastrar.classList.toggle('visually-hidden');
        btnAlterar.classList.toggle('visually-hidden');
        btnRemover.classList.toggle('visually-hidden');
        btnCancelar.classList.toggle('visually-hidden');
    }
};

function fica_em_alerta(){
    if(inputImg.value.trim() === "" || inputDesc.value.trim() === "" || inputPreco.value.trim() === ""){
        alert("<3 Preenche tudo mano aff :D <3");
        return true;
    }

};

btnCancelar.addEventListener('click', function(){
    hidden = true;
    btnHidden();
});
