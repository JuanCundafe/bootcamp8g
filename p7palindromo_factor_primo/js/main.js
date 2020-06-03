
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

const getNumber = () => {
  let number = prompt("Escribe una número para identificar sus factores primos");
  if(justOneNumber(number) == false){
    alert("Ingresa un solo número")
  }else {
    if(checkWords(number) == false){
      alert("Debes ingresar solamente números")
    }else{
    primeNumbers(number)
    let primeFactorString = primeFactor(number).join();
    let arrayCheck = primeFactorString.match(/[","]/)
    if(arrayCheck == null){
      alert(`El número ${number} es un número primo`)
    }else{
      alert(`Los factores primos de tu número son ${primeFactorString}`)
    }
    
      }
 }
}

const checkWords = (string) => {
  var checkNumber = [];
   checkNumber = string.match(/\D/g)
   if(checkNumber == null){
     return true;
   }else{
     return false;
   }
  }


const justOneNumber = (string) => {
  let arrayWord = string.match(/[" " ","]/)

  if(arrayWord == null){
    return true;
  }else {
    return false;
  }
}

const isPrime = (n) => {
  for(let i = 2; i < n; i++){
      if(n % i === 0){
         return false;
      }
  }
  return true;
}
var primes = []
var noPrimes = []
const primeNumbers = (max) => {
  for (let i = 2; i < max; i++) {
      if (isPrime(i)) {
          primes.push(i)
      }
      else{
          noPrimes.push(i)
      }
  }
}

const primeFactor = (string) =>{
  let number = parseInt(string);
  let arrayResult = [ ]
  primes.forEach(element => {
    while(number % element == 0){
      number = number/element
      arrayResult.push(element)
    }
     });
     return arrayResult;
}


