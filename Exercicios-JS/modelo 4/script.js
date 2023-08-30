function Gerar(){
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')
  tab.innerHTML = ''

  if(Number(num.value) == 0 ){
    alert('Por gentileza, digite um número!')
  }
  else{
    let c = 1
    let n = Number(num.value)
    while( c <= 10){
      let item = document.createElement('option')
      item.text = `${n} x ${c} = ${n*c}`
      tab.appendChild(item)
      c++
    }
  }
}