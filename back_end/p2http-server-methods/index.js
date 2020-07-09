const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Nos mandaron a llamar :)')
    response.writeHead(200,{
        'Content-Type': 'text/html'
    })
    if(request.method === 'GET'){
        response.write('<h1> Hola mundo desde GET </h1>')
        console.log("Estamos en GET")
    }else if(request.method === 'POST'){
        response.write('<h1> Hola mundo desde POST </h1>')
        console.log("Estamos en POST")
    }
    response.end()
})

server.listen('8080', () => {
    console.log('El servidor esta escuchando')
})