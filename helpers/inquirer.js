require('colors')
const inquirer = require('inquirer')

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

  let opcion = inquirer
  .prompt([
    {
      type: 'input',
      name: 'Crear tarea',
      message: `${mensaje}`,
      validate(value){
        if(value.length === 0){
          return 'Debe ingresar un valor'
        }
        return true
      }
    },
    {
      type: 'list',
      name: 'Salir',
      message: `Listo! Tarea agregada`,
      choices:[
        'regresar'
      ]
    }
  ])

  return opcion

}

module.exports ={
  lista  ,
  dato ,
}
// const Menu = async ()=> {

//     // console.clear()
//     console.log('============================='.green)
//     console.log('Selecione una opción'.green)
//     console.log('=============================\n'.green)

//    const opt = await inquirer.prompt([
//     {
//       type: 'list',
//       name: 'theme',
//       message: 'What do you want to do?',
      // choices: [{
      //     name:'1) Crear tarea',
      //     value:'1'
      //   },
      //   {
      //     name:'2) Listar tareas',
      //     value:'2'
      //   },
      //   {
      //     name:'3) Listar tareas completadas',
      //     value:'3'
      //   },
      //   {
      //     name:'4) Listar tareas pendientes',
      //     value:'4'
      //   },
      //   {
      //       name:'5) Completar tarea(s)',
      //      value:'5'
      //   },
      //   {
      //       name:'6) Borrar tarea',
      //       value:'6'
      //   },
      //   {
      //     name:'0) Salir',
      //     value:'0'
      //   }
      // ],
//     }
//   ])
// //   .then((answers) => {
// //     console.log(JSON.stringify(answers, null, '  '));
// //   });
   
//    return opt

// }

// const Pause = async()=>{

//     const next = await inquirer.prompt([
//         {
//             type: 'input',
//             name: 'theme',
//             message: `Para continuar presione ${'ENTER'.green} por favor`,
//         }
//     ])

//     return next

// }

// const ingresoDatos = async()=>{

//   const questions = [
//     {
//       type: 'input',
//       name: 'first_question',
//       message: 'Question with filtering and validating text',
//       validate: async () => {
//         await new Promise((r) => setTimeout(r, 3000));
//         return true;
//       },
//       filter: async (answer) => {
//         await new Promise((r) => setTimeout(r, 3000));
//         return `${answer}`;
//       },
//       filteringText: 'Filtering your answer...',
//       validatingText: 'Validating what you wrote...',
//     },
//     {
//       type: 'input',
//       name: 'second_question',
//       message: 'Question without filtering and validating text',
//       validate: async () => {
//         await new Promise((r) => setTimeout(r, 3000));
//         return true;
//       },
//       filter: async (answer) => {
//         await new Promise((r) => setTimeout(r, 3000));
//         return `${answer}`;
//       },
//     },
//   ];
  
//   const inputs = await inquirer.prompt(questions).then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//   });

//   return inputs

// }



