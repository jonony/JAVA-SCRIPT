function contar(){
    var inicio = document.getElementById('txtstart')
    var fim = document.getElementById('txtend')
    var passo = document.getElementById('txtpass')
    var res = document.getElementById('res')

    if(Number(inicio.value) == 0 || Number(fim.value) == 0){
        res.innerHTML = `Impossível calcular!`
    }
    else{
        res.innerHTML = `Contando: <br>`
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        if(p <= 0){
            window.alert(`Passo inválido, considerando passo 1`)
            p = 1 
        }

        if(i < f){
            for(let c = i; c <= f; c+= p){
                res.innerHTML += `${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        } else{
            for(let c = i; c >= f; c-= p){
                res.innerHTML += `${c} \u{1f449}`
            }
            res.innerHTML += `\u{1f3c1}`
        }
    }
}

