btnRemover.addEventListener('click', function() {
    remover();
    removerProduto();
    }, 
);

function remover(){
fetch(local+inputId.value, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'DELETE',
    })
    .then(resposta => resposta.json())
    .then(produto => removerProduto(produto))
}

function removerProduto(){
    alert("Produto excluido com sucesso");
    var ids = document.getElementsByClassName('col-id');
    for(var i = 0; i < ids.length; i++){
        if(ids[i].innerText == inputId.value){
            var tr = ids[i].closest('tr');
            tr.remove();
        }
    }
}