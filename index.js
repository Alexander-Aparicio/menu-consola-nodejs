require('colors')
const { guardarDB, readArchivo } = require('./helpers/guardarArchivo')
const {lista, dato, continuar, listadoABorrar, confirmar, completarTareas} = require('./helpers/inquirer')
const Tarea = require('./modules/Tarea')
const Tareas = require('./modules/Tareas')

console.clear()

const main = async ()=>{

    console.log('Hola Mundo')

    let opcion = ''
    
    const tareas = new Tareas()
    const archivo = await readArchivo()
    tareas.cargarTareasFromArray(archivo)
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
                
                tareas.listaCompleta()
                
                await continuar()
                
            break;

            case '3':
                console.clear()
                
                tareas.listaCompletadas()
                
                await continuar()
                
            break;

            case '4':
                console.clear()
                
                tareas.listaPendientes()
                
                await continuar()
                
            break;

            case '5':
                console.clear()
                
                const ids = await completarTareas(tareas.listadoArr)
                console.log(ids)
                tareas.toggleCompletadas(ids)
                await continuar()
                
            break;

            case '6':
                console.clear()
                
                const id = await listadoABorrar(tareas.listadoArr)
                console.log({id})
                const ok = await confirmar('¿Está seguro?')

                if(ok){

                    tareas.borrarTarea(id)
                    console.log('tarea borrada')

                }
                await continuar()
                
            break;
        }

        guardarDB(tareas.listadoArr)
        
    } while (opcion.opcion !== '0');

    return opcion

}

main()