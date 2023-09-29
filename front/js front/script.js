// let produtos = [
//     {
//         "img":"img/ca-604w5.jpg",
//         "description":"Gabinete Gamer Redragon Wideload Lite, Mid-Tower, Lateral de Vidro, Branco, CA-604W",
//         "valor":"R$ 494,00",
//         "aVista":"R$ 389,90",
//         "comDesconto":"R$ 458,71",
//         "parcela":"R$ 38,23"
//     },
//     {
//         "img":"img/ca-604w5.jpg",
//         "description":"Gabinete Gamer Redragon Wideload Lite, Mid-Tower, Lateral de Vidro, Branco, CA-604W",
//         "valor":"R$ 494,00",
//         "aVista":"R$ 389,90",
//         "comDesconto":"R$ 458,71",
//         "parcela":"R$ 38,23"
//     }
// ];

let url = "http://localhost:8080/";

function getDadosJson() {
    fetch(url)
        .then(resposta => resposta.json())
        .then(produtos => listarProdutos(produtos))
        .catch(erro => console.log("Ocorreu um erro: " + erro));
}

function listarProdutos(produtos) {
    produtos.forEach(p => {

        if (p.tipo === 1) {
            document.getElementById("maisvendidos").appendChild(inserirProduto(p));
       
        } else if (p.tipo === 2) {
            document.getElementById("lancamentos").appendChild(inserirProduto(p));
        }
    
    })
}

function inserirProduto(p) {
    var divProdutos = document.querySelector(".div-produtos");
    var divProduto = document.createElement("div");
    divProduto.classList.add("div-produto");


    var img = document.createElement("img");
    img.src = "data:img/jpg;base64," + p.img;
    img.alt = p.img;
    img.classList.add("div-img-produto")
    divProduto.appendChild(img);

    var infoProduto = document.createElement("div");

    var textDescription = document.createElement("div");
    textDescription.classList.add("p-descri-produto");
    textDescription.innerText = p.description;
    divProduto.appendChild(textDescription);

    var text1 = document.createElement("div");
    text1.classList.add("p-valor");
    text1.innerHTML = 'de <s>R$ ' + (p.preco).toFixed(2) + '</s> por:';
    infoProduto.appendChild(text1);

    var text3 = document.createElement("div");
    text3.classList.add("p-a-vista");
    text3.innerText = "R$ " + (p.preco * 0.90).toFixed(2);
    infoProduto.appendChild(text3);

    var text2 = document.createElement("div");
    text2.classList.add("p-a-vista", "span-a-vista");
    text2.innerText = "à vista";
    infoProduto.appendChild(text2);

    var text4 = document.createElement("div");
    text4.classList.add("p-parcelado");
    text4.innerHTML = '12x de <span class="vermelho">R$ ' + (p.preco / 12).toFixed(2) + '</span>';
    infoProduto.appendChild(text4);

    var text6 = document.createElement("div");
    text6.classList.add("p-parcelado");
    text6.innerText = "sem juros no cartão";
    infoProduto.appendChild(text6);

    divProduto.appendChild(infoProduto);
    divProdutos.appendChild(divProduto);
}

getDadosJson();