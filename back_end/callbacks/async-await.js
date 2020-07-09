
function build (wallToBuild){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            wallToBuild.isBuild = true
            if(wallToBuild.isBuild){
                resolve(wallToBuild)
            } else {
                reject('cannot build')
            }
        }, 3000)
    })
}

function planish (wallToPlanish){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            wallToPlanish.isPlanished = true
            if(wallToPlanish.isPlanished){
                resolve(wallToPlanish)
            } else {
                reject('cannot planish')
            }
        }, 3000)
    })
}

function paint (wallToPaint){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            wallToPaint.isPainted = true
            if(wallToPaint.isPainted){
                resolve(wallToPaint)
            } else {
                reject('cannot paint')
            }
        }, 3000)
    })
}

async function main (){
    const builtWall = await build({})
    const planishedWall = await planish(builtWall)
    const paintedWall = await paint(planishedWall)
    console.log('paintedWall: ', paintedWall)
    return 'bla bla'
}

main()
.then((resultado)=>{
    console.log('Done!: ', resultado)
})
.catch(error => {
    console.error('Error: ', error)
})
