
const getUserOperation = ( selectedOperation, numberOne, numberTwo  ) => {
  let resultado = 0;
  switch( selectedOperation) {
      case "suma":
          resultado = numberOne + numberTwo
          console.log(resultado)
          break;
      case "resta":
          resultado = numberOne - numberTwo
          console.log(resultado)
          break;
      case "división":
          resultado = numberOne/numberTwo
          console.log(resultado)
          break;
      case "multiplicación":
          resultado = numberOne*numberTwo
          console.log(resultado)
          break;
      default:
          console.log("no puedo realizar la operación seleccionada")
  } 
}