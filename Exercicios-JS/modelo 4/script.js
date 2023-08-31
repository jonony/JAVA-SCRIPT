function Gerar(){
  let num = document.getElementById('txtn')
  let tab = document.getElementById('seltab')

  tab.innerHTML = ''
  
  if(Number(num.value) == 0){
    alert('Por gentileza, digite um número!')
  }else{
    let n = Number(num.value)
    let c = 1 
    while(c <= 10){
      let item = document.createElement('Option')
      item.text = `${n} x ${c} = ${n*c} `
      tab.appendChild(item)
      c++
    }
  }
}