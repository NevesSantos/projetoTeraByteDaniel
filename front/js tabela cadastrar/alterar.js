btnAlterar.addEventListener('click', function () {
        alterar();
});

function alterar() {
    fetch(local, {
        headers: {
            'Content-Type': 'application/json'
        },
        method: 'PUT',
        body: JSON.stringify({
            'id': inputId.value,
            'img': inputImg.value,
            'description': inputDesc.value,
            'preco': inputPreco.value            
        })
    })
}