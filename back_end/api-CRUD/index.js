const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.json())

app.get('/koders', (request, response) => {
    const koders = JSON.parse(fs.readFileSync('./kodemia.json')).koders
    response.json({
        Success: true,
        data: {
            koders
        }
    })
})

app.post('/koders', (request, response) => {
    console.log('request body: ', request.body)
    const kodemia = JSON.parse(fs.readFileSync('./kodemia.json'))

    kodemia.koders.push(request.body)

    const jsonAsString = JSON.stringify(kodemia, '\n',2)
    fs.writeFileSync('./kodemia.json', jsonAsString)

    response.json({
        success: true,
        data: kodemia.koders
    })
})

app.delete('/koders/:name', (request, response) => {
    const name = request.params.name
    const name2 = name.toLowerCase()

    const kodemia = JSON.parse(fs.readFileSync('./kodemia.json'))

    const filteredKoders = kodemia.koders.filter((koder) => {
        var nameKoder = koder.name.toLowerCase()
        return nameKoder != name2
    }) 

    kodemia.koders = filteredKoders

    const jsonAsString = JSON.stringify(kodemia,'\n',2)
    fs.writeFileSync('./kodemia.json', jsonAsString)

    response.json({
        success: true,
        data: {
            kodemia
        }
    })
})

app.patch('/koders/:name', (request, response) => {
    const currentName = request.params.name
    const currentName2 = currentName.toLowerCase()
    const newName = request.body.name
    const newGender = request.body.gender
    var koders = JSON.parse(fs.readFileSync('./kodemia.json'))

    const changedKoders = koders.koders.map((koder) => {
        var koderName = koder.name.toLowerCase()
        if(koderName == currentName2){
            koder.name = newName
            koder.gender = newGender
        }
        return koder
    })
    koders.koders = changedKoders

    const jsonAsString = JSON.stringify(koders,'\n',2)
    fs.writeFileSync('./kodemia.json', jsonAsString)

    response.json({
        success: true,
        data: {
            koders
        }
    })
   
})

app.listen(8080, () => {
    console.log('Server is ready on port 8080')
})
