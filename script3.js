// condições aninhadas ; varialvel de hora
var agora = new Date()
var hora = agora.getHours()
console.log(`neste momento são ${hora} horas!`)
if(hora <=12 ){
    console.log(`bom dia!!`)
}
else if(hora <=18 ) {
    console.log(`boa tarde`)
}
else if(hora >18 || hora <24) {
    console.log(`boa noite`)
}
else if(hora >= 0 || hora <= 5){
    console.log(`boa madrugada`)
}