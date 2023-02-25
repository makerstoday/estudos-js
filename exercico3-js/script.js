function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano =document.getElementById('textano')
    var res = document.getElementById('res')
    if (fano.value.length ==0 || fano.value > ano){
        alert('[erro] verifque seus dados e tente novamente')
    }
    else{
        var fsex =document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero =''
        var img =document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'  
            if(idade >=0 && idade <10) {
                //criança
                img.setAttribute('src','criança-masculina.jpg')
            }
            else if (idade < 21) {
            //jovem
                img.setAttribute('src','adolescente-masculino.jpg')
              }
            else if (idade < 50) {
            //adulto 
                img.setAttribute('src','adulto-masculino.jpg')
            } 
            else {
                //idoso
                img.setAttribute('src','idoso-masculino.jpg')
            }
        }
        else if (fsex[1].checked){
            genero = 'mulher'
            if(idade >=0 && idade < 10){
                //criança
                img.setAttribute('src','bb-femino.jpg')       
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src','adolescent-feminino.jpg')
            }
            else if (idade < 50) {
                //adulta
                img.setAttribute('src','adultp-feminino.jpg')
            }
            else {
                //idosa
                img.setAttribute('src','idosa-feminina.jpg')
            }
        }
        res.style.textAlign ='center' 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}


