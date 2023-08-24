function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if(Number(fano.value) == 0 || Number(fano > ano)){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    }  
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''

        var img = document.createElement('img')
       img.setAttribute('id','foto') 

        if(fsex[0].checked){
            gênero = 'homem'
            if(idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','')
            }
            else if(idade < 21){
                //jovem
            }
            else if(idade < 50){
                //adulto
            }
            else{
                //idoso
            }
        }
        else if(fsex[1].checked){
            gênero = 'mulher'

            if(idade >= 0 && idade < 10){
                //criança
            }
            else if(idade < 21){
                //jovem
            }
            else if(idade < 50){
                //adulto
            }
            else{
                //idoso
            }
        }

        res.innerHTML = `Detectamos ${gênero} com ${idade}`
    }
    


}