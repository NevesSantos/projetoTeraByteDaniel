function selecionar() {
    var btnsSelecionar = document.querySelectorAll(".btn-success");
    var arrayBtnsSelecionar = Array.from(btnsSelecionar);
    arrayBtnsSelecionar.forEach(btn => {
        btn.addEventListener('click', function () {
            var linha = this.closest("tr");
            inputId.value = linha.querySelector('.col-id').innerText;
            inputDesc.value = linha.querySelector('.col-desc').innerText;
            inputPreco.value = linha.querySelector('.col-preco').innerText;
            btnHidden();
            hidden = false;
        })
    })
}
