
const fs = require('fs')

fs.writeFile('hola.txt', 'Hola mundo desde node', 'utf8', (error) => {
    if(error) return console.log('No se pudo crear el archivo')

    console.log('Se creo el archivo')
})

