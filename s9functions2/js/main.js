/*pedir al usuario su nombre completo*/
/*contar la cantidad de letras que tenga su nombre*/
/*contar la cantidad de vocales que tiene su nombre*/

/*indicarle al usuario si la cantidad de letras en su nombre corresponde a un número primo*/


var numberChar = []
var numberChar2 = 0;
var menosEspacios = 0;
const getName = () => {
  var name = prompt("Escribe tu nombre completo")
  numberChar = name.split("")
  console.log(numberChar)
  for(let i=0; i<numberChar.length; i++){
      if(numberChar[i] === " "){
        menosEspacios = menosEspacios + 1;
      }
  }
  numberChar2 = numberChar.length - menosEspacios
  console.log(numberChar2)
   alert = ("La cantidad de letras que tiene tu nombre son: " + numberChar2 )
}



/*
var prime = false;
const getPrime = (numberChar2) =>{
    if(numberChar2 % numberChar2 === 0 && numberChar2%1 === 0){
      console.log("La cantidad de letras de tu nombres es un número primo")
    }else {
        console.log("La cantidad de letras de tu nombres NO es un número primo")
    }
}
*/




