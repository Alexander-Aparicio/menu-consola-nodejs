require('colors')
const inquirer = require('inquirer')
const Tarea = require('../modules/Tarea')

const lista = async ()=>{

    // console.clear()
    console.log('============================='.green)
    console.log('Selecione una opción'.green)
    console.log('=============================\n'.green)

  const questions = [
    {
      name:'1) Crear tarea',
      value:'1'
    },
    {
      name:'2) Listar tareas',
      value:'2'
    },
    {
      name:'3) Listar tareas completadas',
      value:'3'
    },
    {
      name:'4) Listar tareas pendientes',
      value:'4'
    },
    {
      name:'5) Completar tarea(s)',
      value:'5'
    },
    {
        name:'6) Borrar tarea',
        value:'6'
    },
    {
      name:'0) Salir',
      value:'0'
    }

  ]

  let opcion = inquirer
  .prompt([
    {
      type: 'list',
      name: 'opcion',
      message: '¿Qué desea hacer?',
      choices: questions
    }
  ])

  return opcion

}

const dato = async (mensaje='Nueva tarea:')=>{

  let opcion = await inquirer
  .prompt([
    {
      type: 'input',
      name: 'tarea',
      message: `${mensaje}`,
      validate(value){
        if(value.length === 0){
          return 'Debe ingresar un valor'
        }
        return true
      }
    }
  ])

  return opcion

}

const continuar = async()=>{

  const questions = [
    {
      type:'list',
      name:'regresar',
      choices:['regresar ( <- )'.yellow]
    }
  ]

  const opcion = await inquirer.prompt(questions)
  return opcion
}

const listadoABorrar = async (tareas = [])=>{

 const choices = tareas.map( (tarea, i) => {

  const idx = `${i+1}`

  return {

    value: tarea.id,
    name:  `${idx} ${tarea.desc}`.green

  }

 })
 
 const questions = [
   {
     type:'list',
     name:'id',
     message:'Borrar',
     choices,
   }
 ]

 const {id} = await inquirer.prompt(questions)

 return id

}

const confirmar = async(message)=>{

  const questions = [
    {
      type:'confirm',
      name:'ok',
      message
    }
  ]

  const {ok} = await inquirer.prompt(questions)

  return ok

}

const completarTareas = async (tareas = [])=>{

  const choices = tareas.map( (tarea, i) => {
 
   const idx = `${i+1}`
 
   return {
 
     value: tarea.id,
     name:  `${idx} ${tarea.desc}`.green,
      checked: (tarea.completadoEn) ? true : false
   }
 
  })
  
  const question = [
    {
      type:'checkbox',
      name:'ids',
      message:'Selecciones',
      choices,
    }
  ]
 
  const {ids} = await inquirer.prompt(question)
 
  return ids
 
}


module.exports ={
  lista,
  dato,
  continuar,
  listadoABorrar,
  confirmar,
  completarTareas
}



