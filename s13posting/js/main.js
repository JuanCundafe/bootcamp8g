var userObject = {}
var counter = 0;
const getUserData = (event) => {
    event.preventDefault()
    let inputsCollection = document.querySelectorAll("input")
    /*
    userObject = {
        name:"Israel Salinas",
        address:"some address",
        phone:"55437888096"
    }
*/
    inputsCollection.forEach(item => {
        /*Creamos una llave para nuestro objeto*/
        let objectKey = item.dataset.pointsTo
        /*Creamos un valor para nuestro objeto*/
        let objectValue = item.value
        /*insertamos la llave y el valor dentro de nuestro objeto*/
        userObject[objectKey] = objectValue
    })
    printUserData(userObject)
}
const printUserData = (userObject) => {
    const { name, address, phone } = userObject
    let dataRow = document.createElement('tr');
    let idTd = document.createElement('td')
    let nameTd = document.createElement('td')
    let addressTd = document.createElement('td')
    let phoneTd = document.createElement('td')
    let idTextNode = document.createTextNode(++counter)
    idTd.appendChild(idTextNode)
    let nameTextNode = document.createTextNode(name)
    nameTd.appendChild(nameTextNode)
    let phoneTextNode = document.createTextNode(phone)
    phoneTd.appendChild(phoneTextNode)
    let addressTextNode = document.createTextNode(address)
    addressTd.appendChild(addressTextNode)
    dataRow.appendChild(idTd)
    dataRow.appendChild(nameTd)
    dataRow.appendChild(addressTd)
    dataRow.appendChild(phoneTd)
    let usersTable = document.getElementById("users-table")
    usersTable.appendChild(dataRow)
}
var submitButton = document.getElementById('submit-button')
submitButton.addEventListener( 'click', getUserData )

var deleteButton = document.getElementById('button')
deleteButton.addEventListener( 'click', getUserData )

const deleteUserData = (userObject) => {
  const { name, address, phone } = userObject
  let dataRow = document.createElement('tr');
  let idTd = document.createElement('td')
  let nameTd = document.createElement('td')
  let addressTd = document.createElement('td')
  let phoneTd = document.createElement('td')
  let idTextNode = document.createTextNode(++counter)
  idTd.appendChild(idTextNode)
  let nameTextNode = document.createTextNode(name)
  nameTd.appendChild(nameTextNode)
  let phoneTextNode = document.createTextNode(phone)
  phoneTd.appendChild(phoneTextNode)
  let addressTextNode = document.createTextNode(address)
  addressTd.appendChild(addressTextNode)
  dataRow.appendChild(idTd)
  dataRow.appendChild(nameTd)
  dataRow.appendChild(addressTd)
  dataRow.appendChild(phoneTd)
  let usersTable = document.getElementById("users-table")
  usersTable.appendChild(dataRow)
}