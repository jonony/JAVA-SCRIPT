let num = window.document.getElementById('txtnum')

function adicionar(){
    if(isNumber(num.value) && !inLista(num.value, valores)){

}else{
    alert('Valor inválido, ou já encontrado na lista')
}
}