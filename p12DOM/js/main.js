
var nameInput = document.getElementById('user-name');
console.log(nameInput)
var inputs = document.getElementsByClassName('form-control');
console.log(inputs)
var inputsByName = document.getElementsByName('user')
console.log(inputsByName)
var elementsByTagname = document.getElementsByTagName("input")
console.log(elementsByTagname)
var elementByQuery = document.querySelector("input.form-control")
console.log(elementByQuery)
var allElementsByQuery = document.querySelectorAll("input.form-control")
console.log(allElementsByQuery)

const myFunction = (event) => {
    console.log(event)
}



