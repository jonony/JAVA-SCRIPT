/*let num = [5,8,2,5,]
num.push(1)
num.sort()
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro elemento do vetor é ${num[0]}`)

let pos = num.indexOf(4)
if(pos == -1){
    console.log(`O primeiro valor do vetor não foi encontrado!`)
}
else{
    console.log(`A posição que o valor se encontra é ${pos}`)
}*/


let num = [9,3,2,1,4,5,6,8]
num.push(3)
num.sort()
console.log(`O vetor tem ${num.length} posições`)

let vet = num.indexOf(5)

if(vet == -1){
    console.log(`O valor inserido nao existe, gentileza verificar!`)
}
else{
    console.log(`A posição em que se encontra o vetor é ${vet} posição`)
}