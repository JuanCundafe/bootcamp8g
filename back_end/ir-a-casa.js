
function irAcasa(callback = () => {}){
    const estoyEnCasa = false
    console.log('Estoy caminando a casa')
    estoyEnCasa = true
    if(estoyEnCasa)callback(null, 'todo bien')
    if(!estoyEnCasa)callback('ayuda', 'me perdí')
}

irAcasa(() => {
    console.log('soy la funcion anonima')
})

