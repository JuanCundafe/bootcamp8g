
var userObject = {}
var counter = 0;
const getUserData = (event) => {
    event.preventDefault()
    let inputsCollection = document.querySelectorAll("input")

    inputsCollection.forEach(item => {
       
        let objectKey = item.dataset.pointsTo
       
        let objectValue = item.value
       
        userObject[objectKey] = objectValue
    })
    printUserData(userObject)
}
const printUserData = (val) => {
    const { name, mail, age } = val
    let dataRow = document.createElement('tr');
    let idTd = document.createElement('td')
    let nameTd = document.createElement('td')
    let addressTd = document.createElement('td')
    let phoneTd = document.createElement('td')
    let idTextNode = document.createTextNode(++counter)
    idTd.appendChild(idTextNode)
    let nameTextNode = document.createTextNode(name)
    nameTd.appendChild(nameTextNode)
    let phoneTextNode = document.createTextNode(age)
    phoneTd.appendChild(phoneTextNode)
    let addressTextNode = document.createTextNode(mail)
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

var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function () {
if(this.readyState == 4 && this.status == 200){
    var item = JSON.parse(this.response)
    for(const coso in item){
        var value = item[coso]
        console.log(value)
        printUserData(value)
    }
  }
};

xhttp.open("GET", "https://ajaxclass-1ca34.firebaseio.com/koders/.json", true);
xhttp.send();
