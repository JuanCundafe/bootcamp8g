
const express = require('express')

const app = express()

app.get('/hola', (request, response) => {
    response.write('Hola mundo! get')
    response.end()
})

app.post('/hola', (request, response) => {
    response.write('Hola mundo! post')
    response.end()
})

app.listen(8080, () => {
    console.log('Server is ready on port 8080')
})

