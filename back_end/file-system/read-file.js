const fs = require('fs')

fs.readFile('hola.txt','utf8',(err,data) => {
    if(err) return console.log("Error")
    console.log(data)
});