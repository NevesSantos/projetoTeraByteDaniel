function selecionar() {
    var btnsSelecionar = document.querySelectorAll(".btn-success");
    var arrayBtnsSelecionar = Array.from(btnsSelecionar);
    arrayBtnsSelecionar.forEach(btn => {
        btn.addEventListener('click', function () {
            var linha = this.closest("tr");
            inputId.value = linha.querySelector('.col-id').innerText;
            inputDesc.value = linha.querySelector('.col-desc').innerText;
            inputPreco.value = linha.querySelector('.col-preco').innerText;
            if(linha.querySelector('.col-tipo').innerText == "Mais Vendidos"){
                document.getElementById("maisvendidos").checked = true;
            }else if(linha.querySelector('.col-tipo').innerText == "Lançamentos"){
                document.getElementById("lancamentos").checked = true;
            }
            btnHidden();
            hidden = false;
        })
    })
}
