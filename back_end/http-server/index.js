
const http = require('http')

const server = http.createServer((request, response) => {
    console.log('Nos mandaron a llamar :)')
    response.writeHead(200,{
        'Content-Type': 'text/html'
    })
    if(request.url === '/adios'){
        response.write('<h1> Adios </h1>')
    }else{
        response.write('<h1> Hola mundo desde un servidor en node </h1>')
        response.write('<h2> Hola mundo desde un servidor en node </h2>')
    }

    response.end()
})

server.listen('8080', () => {
    console.log('El servidor esta escuchando')
})