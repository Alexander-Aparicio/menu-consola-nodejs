require('colors')
const {Menu, Pause} = require('./helpers/inquirer')
const Tarea = require('./modules/Tarea')
const Tareas = require('./modules/Tareas')

console.clear()

const main = async ()=>{

    console.log('Hola Mundo')

    let opt = ''
    let next = ''

    do{
        // opt = await Menu()
        // console.log({opt})
        const tarea = new Tarea('comer')
        const tareas = new Tareas()
        tareas._listado[tarea.id]=tarea
        console.log(tareas)
        next = await Pause()
        // console.log({next})

    } while( opt !== '0')

}

main()