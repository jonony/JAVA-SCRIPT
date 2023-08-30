function contar(){
  var inicio = document.getElementById('txtstart')
  var fim = document.getElementById('txtend')
  var passo = document.getElementById('txtpass')
  var res = document.getElementById('res')

  if(Number(inicio.value) == 0 || Number(fim.value) == 0 || Number(passo.value) == 0 ){
    res.innerHTML = `Impossível contar!`
  }
  else{
    res.innerHTML = 'Contando...'
    var i = Number(inicio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)

    if( p <= 0){
      window.alert('Passo inválido, considerando passo 1')
        p = 1
    } 
    
    if(i < f){
      for(let c = i; c <= f; c += p){
        res.innerHTML += `${c} ` 
      }
    }else{
      for(let c = i; c >= f; c -= p ){
        res.innerHTML += `${c}`
      }
    }
  }
}
