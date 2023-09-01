let valores = [8,1,7,4,2,9]

for(let pos in valores){
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`)
}

let pos = valores.indexOf(2)

if(pos == -1){
    console.log('Infelizmente esse número não existe!')
}
else{
    console.log(`A posição ${pos} possui o valor ${valores[pos]}`)
}