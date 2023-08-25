function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(Number(fano.value) == 0 || Number(fano.value) > 2023){
        alert('[ERRO] Revise os dados e tente novamente')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotos/bebe-homem.png')
            }
            else if(idade < 21){
                img.setAttribute('src', 'fotos/jovem-homem.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'fotos/adulto-homem.png')
            } 
            else{
                img.setAttribute('src', 'fotos/idoso-homem.png')
            }

        }
        else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotos/bebe-mulher.png')
            }
            else if(idade < 21){
                img.setAttribute('src', 'fotos/jovem-mulher.png')
            }
            else if(idade < 50){
                img.setAttribute('src', 'fotos/adulto-mulher.png')
            }
            else{
                img.setAttribute('src', 'fotos/idoso-mulher.png')
            }

        }
    } res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
    res.appendChild(img)
} 


