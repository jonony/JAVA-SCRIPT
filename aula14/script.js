

function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')

    var data = new Date()
    var hora = 3//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`

    if(hora >= 0 && hora < 12){
         img.src = 'fotos/manha.png'
         document.body.style.background = '#c5d4de'
         
    }
    else if(hora >= 12 && hora < 18){
        img.src = 'fotos/tarde.png'
        document.body.style.background = '#fd8154'
    }
    else{
        img.src = 'fotos/noite.png'
        document.body.style.background = '#180c0b'
    }
}