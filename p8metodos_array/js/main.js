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
var counter = 1;

arrayPhrase.forEach((word) => {
  if(counter%2==0){
    var minus = word.toLowerCase()
    newArrayPhrase.push(minus)
    counter += 1
  }else{
    var mayus = word.toUpperCase()
    newArrayPhrase.push(mayus)
    counter += 1
  }
  
})
console.log(newArrayPhrase.join(" "))

var arrayFilter = arrayPhrase.filter((item)=> {
  return item.length >= 5
})

console.log(arrayFilter.join(" "))

var arrayAverage = arrayPhrase.reduce ((acum, value) => {
  return acum + value.length
}, 0)
var average = arrayAverage/arrayPhrase.length
console.log(`La frase usa en promedio ${average} caracteres por palabra`)
