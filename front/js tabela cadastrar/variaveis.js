let btnterabyte = document.getElementById("terabyte");

let inputId = document.getElementById("id");
let inputImg = document.getElementById("img");
let inputDesc = document.getElementById("description");
let inputPreco = document.getElementById("preco");


let btnCadastrar = document.getElementById("cadastrar");
let btnAlterar = document.getElementById("alterar");
let btnRemover = document.getElementById("remover");
let btnCancelar = document.getElementById("cancelar");

let hidden = true;

let local = "http://localhost:8080/"

btnterabyte.addEventListener('click', function(){
    window.location.href = "http://127.0.0.1:5500/front/index.html";
});