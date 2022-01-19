require('colors')
const {lista, dato, continuar} = require('./helpers/inquirer')
const Tarea = require('./modules/Tarea')
const Tareas = require('./modules/Tareas')

console.clear()

const main = async ()=>{

    console.log('Hola Mundo')

    let opcion = ''
    
    const tareas = new Tareas()

    do {

        console.clear()
        opcion = await lista()
        console.log(opcion)

        switch (opcion.opcion) {
            case '0':
                console.clear()
                break;

            case '1':
                let input = await dato()
                tareas.crearTarea(input.tarea)
                await continuar()

                break;

            case '2':
                console.clear()
                console.log(tareas._listado)
                
                await continuar()
                break;
        }
        
    } while (opcion.opcion !== '0');

    return opcion

}

main()