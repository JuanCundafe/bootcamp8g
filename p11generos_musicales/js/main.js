var songsArray = [
    {
        name: "Thunderstruck",
        interpreter: "AC / DC",
        genre: "Rock"
    }, {
        name: "Fear of the dark",
        interpreter: "Iron Maiden",
        genre: "Metal"
    }, {
        name: "Whole lotta Rossie",
        interpreter: "AC / DC",
        genre: "Rock"
    }, {
        name: "Electric Eye",
        interpreter: "Judas Priest",
        genre: "Metal"
    }, {
        name: "The show must go on",
        interpreter: "Queen",
        genre: "Rock"
    }, {
        name: "Sappy",
        interpreter: "Nirvana",
        genre: "Grounge"
    }, {
        name: "Smeels like teen spirit",
        interpreter: "Nirvana",
        genre: "Grounge"
    }, {
        name: "The memory remains",
        interpreter: "Metallica",
        genre: "Trash"
    }, {
        name: "Stairway to heaven",
        interpreter: "Led Zeppelin",
        genre: "Rock"
    }, {
        name: "Leave that thing alone",
        interpreter: "Rush",
        genre: "Progressive Rock"
    }, {
        name: "Confortably numb",
        interpreter: "Pink Floyd",
        genre: "Progressive Rock"
    }
]

var rock = []
var metal = []
var grounge = []
var progressiveRock = []
var trash = []
var list= [["Rock", rock], ["Metal",metal], ["Grounge", grounge], ["Progressive Rock", progressiveRock], ["Trash", trash]]
var musicalGenre = songsArray.reduce((accum, item, index) => {
    item.genre === "Rock" ? rock.push(item) : 0
    item.genre === "Metal" ? metal.push(item) : 0
    item.genre === "Grounge" ? grounge.push(item) : 0
    item.genre === "Progressive Rock" ? progressiveRock.push(item) : 0
    item.genre === "Trash" ? trash.push(item) : 0
    return [rock, metal, grounge, progressiveRock, trash]
     
}, 0);
console.log(list)
console.log(musicalGenre)

    /*
    this.organizeGenre = function (){
        var {javascript, css, jquery, node} = this.skills[0];
        let average = (javascript + css + jquery + node) / 4;
        return average;
        }
    */

/*Crear un nuevo array que contenga las 
canciones de songArray categorizadas por "gender"*/
