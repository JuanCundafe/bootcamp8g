
/*
const addDataTable = (event) => {
    let nombre = name.target.value
    let listItem = document.createElement("th")
    let textNode = document.createTextNode(nombre)
    listItem.appendChild(textNode)
    table.appendChild(listItem)
}*/


var inputCollection = document.querySelectorAll('input');
console.log(inputCollection)

var accum = 1;
document.getElementById(`btn`).addEventListener("click", ( event )=> {
    var rowItem = document.createElement("tr")
    let textNumber = document.createTextNode(accum)
    let number = document.createElement("th")
    number.appendChild(textNumber)
    rowItem.appendChild(number) 
    inputCollection.forEach( element => {   
        let value = element.value    
        let textValue = document.createTextNode(value)
        let listItem = document.createElement("th")
        listItem.appendChild(textValue)
        rowItem.appendChild(listItem)
    })
    table.appendChild(rowItem)
    accum +=  1;
})
