
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

build({})  
    .catch((error) => {
        console.error('build error:', error)
    })
    .then((builtWall) => {
        console.log('builtWall:', builtWall)
        planish({})
        .then((planishedWall) => {
            console.log('planishedWall:', planishedWall)
            paint({})
            .then((paintedWall) => {
                console.log('paintedWall:', paintedWall)
            })
            .catch((paintError) => {
                console.error('paint error:', paintError)
            })
        })
        .catch((planishError) => {
            console.error('planish error:', planishError)
        })
    })

