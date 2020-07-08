
const fs = require('fs')

fs.appendFile('hola.txt',' probando este método', (err) => {
    if(err) return console.log("Error")
    console.log("La información ya se agregada al archivo")
})