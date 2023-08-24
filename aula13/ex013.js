var agora = new Date()
var now = agora.getHours()

var hours = new Date()
var hour  = hours.getHours()

var mins = new Date()
var min = mins.getMinutes()

var semana = new Date()
var diaSem = semana.getDay()

if(now < 12){
    console.log('Bom dia!')
}
else if(now <= 18){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}


switch(diaSem){
    case 0:
        console.log(`Agora são exatamente ${hour} horas e ${min} minutos! Hoje é Domingo!`)
        break
    case 1:
        console.log(`Agora são exatamente ${hour} horas e ${min} minutos! Hoje é Segunda-feira!`)
        break
    case 2: 
        console.log(`Agora são exatamente ${hour} horas e ${min} minutos! Hoje é Terça-feira! `)
        break
    case 3: 
        console.log(`Agora são exatamente ${hour} horas e ${min} minutos! Hoje é Quarta-feira! `)
        break
    case 4:
        console.log(`Agora são exatamente ${hour} horas e ${min} minutos! Hoje é Quinta-feira! `)
        break
    case 5:
        console.log(`Agora são exatamente ${hour} horas e ${min} minutos! Hoje é Sexta-feira! `)
        break
    case 6:
        console.log(`Agora são exatamente ${hour} horas e ${min} minutos! Hoje é Sábado!`)
        break
    default:
        console.log('[ERRO] Dia não encontrado')
    }
    


