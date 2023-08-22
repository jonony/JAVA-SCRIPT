var now = new Date()
var min = new Date()

var hora = now.getHours()
var mins = min.getMinutes()

console.log(`Agora são ${hora} horas e ${mins} minutos.`)
if(hora < 12){
    console.log('Bom dia!')
}
else if(hora <= 18){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}

