
function atualizar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var hr =  new Date()
    var hora = hr.getHours()

    var min = new Date()
    var minuto = min.getMinutes()

    var day = new Date()
    var hoje = 0//day.getDay()

    msg.innerHTML = null

   if(hora < 12 ){
    msg.innerHTML = `Bom dia! Agora são ${hora} horas e ${minuto} minutos. Hoje é ${hoje}!`
    img.src = 'fotos/manha.png'
   }

   else if(hora >= 12 && hora <= 18){
    msg.innerHTML += `Boa tarde! Agora são ${hora} horas e ${minuto}minutos. Hoje é ${hoje}!`
    img.src = 'fotos/tarde.png'
   }

   else{
    msg.innerHTML += `Boa noite! Agora são ${hora} horas e ${minuto} minutos. Hoje é ${hoje}!`
    img.src = 'fotos/noite.png'
   }
   
   
}

   


