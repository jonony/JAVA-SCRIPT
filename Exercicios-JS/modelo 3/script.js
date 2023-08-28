function contar(){
    var inicio = document.getElementById('txtstart')
    var fim = document.getElementById('txtend')
    var passo = document.getElementById('txtpass')
    var res = document.getElementById('res')

    if(Number(inicio.value) == 0 || Number(fim.value) == 0 || Number(passo.value) == 0){
        res.innerHTML = `Impossível contar!`
        alert('[ERRO] Faltam dados')
    } else{
        res.innerHTML = 'Contando...'
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1f449} `
            }   
        }
        else{ //contagem regressiva
            for(let c = i; i >= f; c -= p){
                res.innerHTML += `${c} \u{1f449} `
            }
        } res.innerHTML += `\u{1f3c1}`
    }
}

