/*
    crear una función que pida al usuario los siguientes datos:
    nombre, apellidos, calle, número, colonia, código postal, alcaldía o municipio
    esa función debe devolver un objeto con la siguiente estructura:
    {
        nombre:
        apellidos:
        direccion:{
            calle:
            numero:
            colonia:
            cp:
            alcaldia:
        }
    }
*/

const createUser = () => {
    let userName = prompt("Ingresa tu primer nombre")
    let userLastName = prompt("Ingresa tus apellidos")
    alert("A continuación pediremos los datos de tu dirección")
    let user = {}
    user.Nombre = userName
    user.Apellidos = userLastName
    user.Dirección = createAdress()
    return user
}

const createAdress = () => {
    let userStreet = prompt("Ingresa tu calle")
    let userNumberStreet = prompt("Ingresa el número exterior de tu calle")
    let userNeighborhood = prompt("Ingresa tu colonia")
    let userPostalCode = prompt("Ingresa tu código postal")
    let userBorough = prompt("Ingresa tu alcaldía o municipio")
    let adress = {}
    adress.Calle = userStreet
    adress.Número = userNumberStreet
    adress.Colonia = userNeighborhood
    adress.cp = userPostalCode
    adress.Alcaldía = userBorough
    return adress
}
/*
cars = [
    {
        year:"2000",
        maker:"Toyota",
        model:"Corolla",
        hp:"300"
    },
    {
        year:"1967",
        maker:"Ford",
        model:"Mustang",
        hp:"500"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Sentra",
        hp:"128"
    },
    {
        year:"2012",
        maker:"Mitubishi",
        model:"Lancer",
        hp:"300"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Altima",
        hp:"200"
    },
    {
        year:"1990",
        maker:"Volkswagen",
        model:"Sedan",
        hp:"80"
    },
    {
        year:"2015",
        maker:"Nissan",
        model:"Tiida",
        hp:"200"
    }
]
    crear una función que pida al usuario un año (2000, 1989, etc).
    la función debe extraer los autos del array cars, cuyo año sea mayor al indicado por el usuario
    por cada auto extraído, mostrar al usuario un mensaje que diga "Opción ${indice}: ${fabricante del auto} 
    ${nombre del auto} del año ${año de fabricación}, con ${hp} caballos de fuerza"
*/
/*
const year = () => {
    let carYear = prompt("Ingresa un año cualquiera para buscar el rango de tus autos")
    let year = {}
    year.date = carYear
    console.log(user)
}
*/


cars = [
    {
        year:"2000",
        maker:"Toyota",
        model:"Corolla",
        hp:"300"
    },
    {
        year:"1967",
        maker:"Ford",
        model:"Mustang",
        hp:"500"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Sentra",
        hp:"128"
    },
    {
        year:"2012",
        maker:"Mitubishi",
        model:"Lancer",
        hp:"300"
    },
    {
        year:"2000",
        maker:"Nissan",
        model:"Altima",
        hp:"200"
    },
    {
        year:"1990",
        maker:"Volkswagen",
        model:"Sedan",
        hp:"80"
    },
    {
        year:"2015",
        maker:"Nissan",
        model:"Tiida",
        hp:"200"
    }
]

const carSelection = () => {
    let carYear = prompt("Ingresa un año cualquiera para buscar el rango de tus autos")
    let filtered = cars.filter(user => {
        return user.year > carYear
    })
    console.log(filtered)
}
