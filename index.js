require('colors')
const {Menu, ingresoDatos, lista, dato} = require('./helpers/inquirer')
const Tarea = require('./modules/Tarea')
const Tareas = require('./modules/Tareas')

console.clear()

const main = async ()=>{

    console.log('Hola Mundo')

    let opcion = ''
    opcion = await lista()
    const tareas = new Tareas()

    do {

        switch (opcion.opcion) {
            case '0':
                console.clear()
                break;

            case '1':
                console.log(opcion)
                let input = await dato()
                tareas.crearTarea(input.message)
                

                if(input.message = 'regresar'){

                    console.clear()
                    opcion = await lista()
    
                }
                break;

            case '2':
                
                console.log(tareas._listado)
                opcion={opcion:'1'}
                break;
        }
        
    } while (opcion.opcion !== '0');

    return opcion
    // const input = await ingresoDatos()
    // console.log(input)

    // let opt = ''
    // const tareas = new Tareas()

    // do{

    //     opt = await Menu()

    //     switch (opt) {

    //         case '1':
    //             // Crear opción
    //             console.log(opt)
    //             const input = await ingresoDatos()
    //             console.log(input)
    //             // next = await Pause()
    //             break;
        
    //         case '2':
    //             console.log( tareas._listado )
    //             // next = await Pause()
    //             break;

    //     }

    // } while( opt !== '0')


}

main()