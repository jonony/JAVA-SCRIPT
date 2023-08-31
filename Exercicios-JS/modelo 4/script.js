function Gerar(){
    var num = document.getElementById('txtn')
    var tab = document.getElementById('seltab')

    tab.innerHTML = ``

    if(Number(num.value) == 0){
        alert('Por gentileza digite um número!')
    }
    else{
        let n = Number(num.value)
        let c = 1 

        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}