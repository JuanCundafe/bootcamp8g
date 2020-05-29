/*
1:
-Pedir al usuario su nombre completo
-Determinar la cantidad de palabras que tiene su nombre
-si la cantidad de palabras es mayor que 3, indicarle al usuario que su nombre es muy largo
-si no, indicar al usuario que tiene un nombre corto

2:pedir al usuario mediante diferentes propmts su dirección
    (calle)
    (número)
    (colonia)
    (alcaldía)
    (estado)
    mostrar al usuario su dirección completa con el siguiente formato:
    input ->    san mateo 
                172
                la preciosa
                azcapotzalco
                ciudad de mexico
    output ->   San Mateo, 172, La Preciosa, Azcapotzalco, Ciudad De México

3: 
    Pedir al usuario que escriba una frase
    Pedir al usuario que escriba un caracter
    Indicarle al usuario la cantidad de veces que ese caracter aparece en su frase;

4:
    Pedir al usuario su nombre completo
    Mostrarle al usuario sus iniciales con el siguiente formato:
    input  -> "Israel Salinas Martínez"
    output -> I.S.M. 
*/
/*
var name = prompt("Escribe tu nombre completo" , "")
var separateName = name.split(" ")
var numberWords = separateName.length
if(numberWords > 3){
    alert("Tu nombre es muy largo")
}else{
    alert("Tu nombre es corto")
}
*/
var street = prompt("Escribe tu calle")
var street3 = []
var neighborhood3 = []
var alcaldía3 = []
var state3 = []
var adress

var number = prompt("Escribe el número exterior de tu dirección")
var neighborhood = prompt("Escribe tu colonia")
var alcaldía = prompt("Escribe tu alcaldía si tienes")
var state = prompt("Escribe el Estado donde vives")

var street2 = street.split(" ")
var neighborhood2 = neighborhood.split(" ")
var alcaldía2 = alcaldía.split(" ")
var state2 = state.split(" ")

for(var i=0; i<street2.length; i++){
  street3 = street3 + " " + street2[i].charAt(0).toUpperCase() + street2[i].slice(1)
}
for(var i=0; i<neighborhood2.length; i++){
    neighborhood3 = neighborhood3 + " " + neighborhood2[i].charAt(0).toUpperCase() + neighborhood2[i].slice(1)
  }
  for(var i=0; i<alcaldía2.length; i++){
    alcaldía3 = alcaldía3 + " " + alcaldía2[i].charAt(0).toUpperCase() + alcaldía2[i].slice(1)
  }
  for(var i=0; i<state2.length; i++){
    state3 = state3 + " " + state2[i].charAt(0).toUpperCase() + state2[i].slice(1)
  }

adress = street3.concat(" ", neighborhood3,",", alcaldía3,"," state3 )
console.log(adress)
/*
var name = prompt("Escribe tu nombre completo" , "")
var separateName = name.split(" ")
*/





