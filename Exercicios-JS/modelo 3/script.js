function contar(){
  var inicio = document.getElementById('txtstart')
  var fim = document.getElementById('txtend')
  var passo = document.getElementById('txtpass')
  var res = document.getElementById('res')

  if(Number(inicio.value) == 0 || Number(fim.value) == 0 || Number(passo.value) == 0){
    res.innerHTML = ('Impossível contar, Digite um número!')
  }
  else{
    res.innerHTML = 'Contando... '
    let i = Number(inicio.value)
    let f = Number(fim.value)
    let p = Number(passo.value)

    if(i <= f ){
      for(i ; i <= f; i += p ){
        res.innerHTML += `${i} `
      }
    }
    else{
      for(i ; i >= f ; i -= p){
        res.innerHTML += `${i} `
      }
    }
  }
}
