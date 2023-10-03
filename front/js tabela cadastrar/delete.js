btnRemover.addEventListener('click', function() {
    remover();
    form.reset();
    }, 
);

function remover(){
fetch(local+inputId.value, {
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'DELETE',
    })
    .then(resposta => resposta.json());
    removerProduto();
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