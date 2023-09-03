let num = document.getElementById('txtnum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n,l){
  if(l.indexOf(Number(n)) != -1){
    return true
  }else{
    return false
  }  
}


function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
    valores.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `O valor ${num.value} foi adicionado com sucesso :)`
    lista.appendChild(item)
    }else{
        alert('Valor inválido, ou já encontrado na lista')
    }
    
    num.value = ''
    num.focus()
}

function finalizar(){
    if(valores.length == 0){
        alert('Adicione valores por gentileza para finalizar')
    }else{
       let tot = valores.length
       let maior = valores[0]
       let menor = valores[0]
        let soma = 0
        let media = 0

        for(pos in valores){
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
            soma += valores[pos]
        }
        media = soma/tot
        
        res.innerHTML = ''      
       res.innerHTML += `<p> Ao todo temos ${tot} valores adicionados`
       res.innerHTML += `<p> O maior valor informado, foi é ${maior}</p>`
       res.innerHTML += `<p> O menor valor informado foi é ${menor}</p>`
       res.innerHTML += `<p> A soma entre os valores é ${soma}</p>`
       res.innerHTML += `<p> A média entre os valores é ${media}</p>`
    }
}