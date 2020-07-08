const fs = require('fs')

fs.copyFile('hola.txt', 'copy.txt', (err) => {
    if(err) return console.log("Error")
    console.log("Se copió de manera correcta")
})