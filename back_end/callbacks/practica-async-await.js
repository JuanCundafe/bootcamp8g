function entrevista (koderPorEntrevistar){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderPorEntrevistar.entrevistado = true
            if(koderPorEntrevistar.entrevistado){
                resolve(koderPorEntrevistar)
            } else {
                reject('No entrevistado')
            }
        }, 2000)
    })
}

function oferta (koderPorOfertar){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderPorOfertar.ofertado = true
            if(koderPorOfertar.ofertado){
                resolve(koderPorOfertar)
            } else {
                reject('No ofertado')
            }
        }, 2000)
    })
}

function apartar (koderPorApartar){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderPorApartar.apartado = true
            if(koderPorApartar.apartado){
                resolve(koderPorApartar)
            } else {
                reject('No ha apartado')
            }
        }, 2000)
    })
}

function primeraClase (koderPorEstudiar){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            koderPorEstudiar.estudiando = true
            if(koderPorEstudiar.estudiando){
                resolve(koderPorEstudiar)
            } else {
                reject('No ha empezado su clase')
            }
        }, 2000)
    })
}

async function main (){
    const entrevistado = await entrevista({})
    const ofertado = await oferta(entrevistado)
    const apartado = await apartar(ofertado)
    const estudiante = await primeraClase(apartado)
    return estudiante
}

main()
.then((resultado)=>{
    console.log('Done!: ', resultado)
})
.catch(error => {
    console.error('Error: ', error)
})
