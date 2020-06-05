var cars = [
  [
      "2010",
      "Toyota",
      "Supra",
      "300"
  ],
  [
      "2015",
      "Mazda",
      "RX7",
      "350"
  ],
  [
      "2015",
      "Nissan",
      "Skyline",
      "300"
  ]
]

let car = cars.map( item => {
  var [year, brand, model, hp] = item
  var carList = {year, brand, model, hp}
  return carList
})
console.log(car)
