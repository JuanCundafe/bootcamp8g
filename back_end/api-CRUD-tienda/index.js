const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.json())

app.get('/tienda', (request, response) => {
    const products = JSON.parse(fs.readFileSync('./tienda.json')).products
    response.json({
        Success: true,
        data: {
            products
        }
    })
})

app.post('/tienda', (request, response) => {
    console.log('request body: ', request.body)
    const stock = JSON.parse(fs.readFileSync('./tienda.json'))

    stock.products.push(request.body)

    const jsonAsString = JSON.stringify(stock, '\n',2)
    fs.writeFileSync('./tienda.json', jsonAsString)

    response.json({
        success: true,
        data: stock
    })
})

app.delete('/tienda/:product', (request, response) => {
    const productName = request.params.product
    const productName2 = productName.toLowerCase()

    const stock = JSON.parse(fs.readFileSync('./tienda.json'))

    const filteredItems = stock.products.filter((item) => {
        var nameItem = item.product.toLowerCase()
        return nameItem != productName2
    }) 

    stock.products = filteredItems

    const jsonAsString = JSON.stringify(stock,'\n',2)
    fs.writeFileSync('./tienda.json', jsonAsString)

    response.json({
        success: true,
        data: {
            stock
        }
    })
})

app.patch('/tienda/:product', (request, response) => {
    const productName = request.params.product
    const productName2 = productName.toLowerCase()
    const newProductName = request.body.product
    const newSize = request.body.size
    const newExpirationDate = request.body.expiration_date
    var stock = JSON.parse(fs.readFileSync('./tienda.json'))

    const changedItems = stock.products.map((item) => {
        var itemName = item.product.toLowerCase()
        if(itemName == productName2){
            item.product = newProductName
            item.size = newSize
            item.expiration_date = newExpirationDate
        }
        return item
    })
    console.log(changedItems)
    stock.products = changedItems

    const jsonAsString = JSON.stringify(stock,'\n',2)
    fs.writeFileSync('./tienda.json', jsonAsString)

    response.json({
        success: true,
        data: {
            stock
        }
    })
   
})

app.listen(8080, () => {
    console.log('Server is ready on port 8080')
})
