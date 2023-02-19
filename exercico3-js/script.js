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
            if(idade >=0 && idade <10){
                //criança
                img.setAttribute('src ','bb-feminino.jpg')
            }       
        }
        else if (fsex[1].checked){
            genero = 'mulher'
        }
        res.style.textAlign ='center' 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}


