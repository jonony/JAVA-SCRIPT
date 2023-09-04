let amigo = {
nome: 'jõao',
sexo: 'M',
peso: 79.7, 
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}
amigo.engordar(3)
console.log(`${amigo.nome} pesa ${amigo.peso}`)