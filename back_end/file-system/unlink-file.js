
const fs = require('fs')

fs.unlink('eliminar.txt', (err) => {
    if(err) return console.log("Error")
    console.log("Se eliminó el archivo exitosamente")
})