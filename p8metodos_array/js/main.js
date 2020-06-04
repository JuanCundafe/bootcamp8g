/*
Considerar el string original "La mejor forma de predecir el futuro es creándolo"
con base en dicho string, realizar lo siguiente:
1.- Regresar un nuevo string, en el cual las palabras pares esten escritas en minúscula, y las palabras nones en mayúscula
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "LA mejor FORMA de PREDECIR el FUTURO es CREÁNDOLO"
2.- Regresar un nuevo string, que sea una frase formada con todas las palabras del string original que tengan más de 5 letras
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "mejor forma predecir futuro creándolo"
3.- Regresar el promedio de caracteres por palabra con base en el string original
    input => "La mejor forma de predecir el futuro es creándolo"
    output => "La frase usa en promedio ${average} caracteres por palabra"
*/

var stringPhrase = "La mejor forma de predecir el futuro es creándolo"
var arrayPhrase = stringPhrase.split(" ")
console.log(arrayPhrase)
var newArrayPhrase = []

var procesedArray = arrayPhrase
                        .map( (word, index)  => index % 2 === 0 ? word.toUpperCase() : word.toLowerCase() )
                        .join(" ")
console.log(procesedArray)

var arrayFilter = arrayPhrase.filter(item => item.length >= 5).join(" ")

console.log(arrayFilter)

var arrayAverage = arrayPhrase.reduce ((acum, value) => {
  return acum + value.length
}, 0)

var average = arrayAverage/arrayPhrase.length
console.log(`La frase usa en promedio ${average} caracteres por palabra`)
