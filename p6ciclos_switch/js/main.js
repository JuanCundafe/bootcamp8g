
const geometricFigure = ( selectedGeometricFigure, selectedMeasurement ) => {
  var selectedGeometricFigure = prompt("Elige y escrige alguna de las siguiente figuras geométricas: cuadrado, rectángulo, círculo o triángulo")
  var selectedMeasurement = prompt("Elige y escribe si deseas obtener la fórmula del -área- o del -perímetro- de la figura elegida")
  switch( selectedGeometricFigure) {
      case "cuadrado":
        getMeasurementSquare(selectedMeasurement)
          break;
      case "círculo":
        getMeasurementCircle(selectedMeasurement)
          break;
      case "rectángulo":
        getMeasurementRectangle(selectedMeasurement)
          break;
      case "triángulo":
        getMeasurementTriangle(selectedMeasurement)
          break;
      default:
          console.log("Esa no es una de las figuras geométricas indicadas, por favor vuelve a empezar")
  } 
}
const getMeasurementSquare = (measurementSquare) => {
  switch(measurementSquare){
    case "área":
      alert("El area de un cuadrado se calcula a partir de uno de sus lados. Es el producto de la base por la altura del cuadrado, ya que al ser ambas iguales, el área será un lado al cuadrado. Área = lado x lado Ejemplo: Área = 5cm x 5cm = 25cm²")
      break;
    case "perímetro":
      alert ("El perímetro de un cuadrado se calcula sumando todos sus 4 lados o multiplicando uno de sus lados por 4.  Perimetro = L * 4. Ejemplo Perímetro = 5 + 5 + 5 + 5 = 20 cm")
  }
}

const getMeasurementRectangle = (measurementRectangle) => {
  switch(measurementRectangle){
    case "área":
      alert("La ecuación para encontrar el área del rectángulo es simplemente A = h * b. Esto significa que el área de un rectángulo es igual al producto de su altura (h) por su base (b), o bien de su longitud por su anchura. Área = b x h Ejemplo: Área = 5 x 7 = 35 cm² ")
      break;
    case "perímetro":
      alert ("El perímetro de un rectángulo es la suma de sus cuatro lados. Como el rectángulo tiene los lados iguales dos a dos, su perímetro será el doble de la suma de dos lados contiguos (es decir, a y b). Perímetro = (a + b)*2 Ejemplo: Perímetro  = (5 + 7)*2 = 24 cm")
  }
}

const getMeasurementCircle = (measurementCircle) => {
  switch(measurementCircle){
    case "área":
      alert("El área de un circulo es igual al valor de su radio elevado al cuadrado multiplicado por (PI) π. Área = π*r² Ejemplo: Área = π*(5)² = 78.5398 cm²")
      break;
    case "perímetro":
      alert ("El perímetro del circulo es el conjunto de puntos que forman el contorno de un círculo y también se conoce como longitud de la circunferencia. Perímetro = 2π*radio Ejemplo: 2π*(5)= 31.41 cm")
  }
}

const getMeasurementTriangle = (measurementTriangle) => {
  switch(measurementTriangle){
    case "área":
      alert("El área de un triángulo es igual a base por altura partido por 2. La altura es la recta perpendicular trazada desde un vértice al lado opuesto (o su prolongación). Area = (base x altura)/2 Ejemplo: (5x7)/2 = 17.5 cm²")
      break;
    case "perímetro":
      alert ("El perímetro de un triángulo es igual a la suma de la longitud de sus tres lados, sean iguales o no. Perimetro = Lado1 + Lado2 + Lado3 Ejemplo: Perímetro = 5+7+7.5 = 19.5 cm")
  }
}

const evenNumber = ( number ) => {
  var selectedNumber = prompt("Elige un número de entre el 0 y el 50 y teclealo a continuación:")
  var selectedNumberNumber = parseInt(selectedNumber)
  if(selectedNumberNumber > 0 && selectedNumberNumber <= 50 ){
    for(let i = 0; i<selectedNumberNumber; i++){
      if(i%2 === 0){
        console.log(i)
      }
    }
  }
  else {
    alert("Elige otro número dentro del rango indicado")
  }
}