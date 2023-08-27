function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(Number(fano.value) == 0 || Number(fano.value) > ano){
        alert('[ERRO] Revise os dados e tente novamente por gentileza!')
    }
    else{
        var radsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')


        if(radsex[0].checked){
            gênero = 'masculino'
        
            if(idade >= 0 && idade < 12){
                img.setAttribute('src','fotos/bebe-homem.png')
            }
            else if(idade <= 21){
                img.setAttribute('src','fotos/jovem-homem.png')
            }
            else if(idade < 50){
                img.setAttribute('src','fotos/adulto-homem.png')
            }
            else if(idade < 105){
                img.setAttribute('src','fotos/idoso-homem.png')
            }
            else{
                alert('[ERRO] Idade inexistente, verifique os dados novamente')
            }
        
        }
        else if(radsex[1].checked){
            gênero = 'feminino'

            if(idade >= 0 && idade < 12){
                img.setAttribute('src','fotos/bebe-mulher.png')
            }
            else if(idade <= 21){
                img.setAttribute('src','fotos/jovem-mulher.png')
            }
            else if(idade < 50){
                img.setAttribute('src','fotos/adulto-mulher.png')
            }
            else if(idade < 105){
                img.setAttribute('src','fotos/idoso-mulher.png')
            }
            else{
                alert('[ERRO] Idade inexistente, verifique os dados novamente')
            }
        }

    } res.innerHTML = `Detectamos o sexo ${gênero} com ${idade} anos!`
    res.appendChild(img)
}

