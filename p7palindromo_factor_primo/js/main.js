
const getWord = () => {
  let word = prompt("Escribe una palabra para verificar si es palíndromo");
  if(justOneWord(word) == false){
    alert("Ingresa una sola palabra")
  }else {
  if(checkNumbers(word) == false ){
    alert("No puedes ingresar números")
  }else {
    let isPalindrome = checkPalindrome(word);
    isPalindrome ? 
        alert("La palabra ingresada es un palíndromo") : 
        alert("La palabra ingresada no es un palíndromo")
    }
  }

}
const checkPalindrome = (string) => {
  let array = string.split("")
  let newArray = []
   for(var i=array.length-1; i>=0; i--){
    newArray.push(array[i])
  }
   if(newArray.toString() === array.toString()){
     return true;
  }
    else{
     return false;
   }
  }
const justOneWord = (string) => {
  let arrayWord = string.split(" ")
  if(arrayWord.length > 1){
    return false;
  }else {
    return true;
  }
}


const checkNumbers = (string) => {
  var checkNumber = [];
 checkNumber = string.match(/[1234567890]/g)
 if(checkNumber == null){
   return true;
 }else{
   return false;
 }
}

/*

const getNumber = () => {
  let number = prompt("Escribe una número para identificar sus factores primos");
  if(justOneNumber(number) == false){
    alert("Ingresa un solo número")
  }else {
    let primeFactors = getPrimeFactor(number);
    primeFactors ? 
        alert(`Los factores primos son` ${string}) :
        alert("La palabra ingresada no es un palíndromo")
 }
}

const justOneNumber = (string) => {
  let arrayWord = string.split(" ", ",")
  if(arrayWord.length > 1){
    return false;
  }else {
    return true;
  }
}

const getPrimeFactor = (string) => {
  let makeNumber = parse.int(string)
  let string = " ";
  while(x != 1){
    if(x%2 == 0){
      x = x/2
      string = string.concat(2)
    }else{
      if(x%3 == 0){
      x = x/2
      string = string.concat(3)
    }
  }else{
     if(x%5 == 0){
      x = x/2
      string = string.concat(5)
  }else{
     if(x%7 == 0){
      x = x/2
      string = string.concat(7)
  }
  return string
}
*/
