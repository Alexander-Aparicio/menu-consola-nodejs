require('colors')
const inquirer = require('inquirer')

const Menu = async ()=> {

    console.clear()
    console.log('============================='.green)
    console.log('Selecione una opción'.green)
    console.log('=============================\n'.green)

   const opt = await inquirer.prompt([
    {
      type: 'list',
      name: 'theme',
      message: 'What do you want to do?',
      choices: [{
          name:'1) Ingeniero',
          value:'ing'
        },
        {
          name:'2) Licenciado',
          value:'lic'
        },
        {
          name:'3) Doctor',
          value:'doc'
        },
        {
          name:'4) Técnico',
          value:'tec'
        },
        {
            name:'5) Salir',
            value:'0'
        },
        new inquirer.Separator(),
        'Ask for opening hours',
        {
          name: 'Contact support',
          disabled: 'Unavailable at this time',
        },
        'Talk to the receptionist',
      ],
    }
    // {
    //   type: 'list',
    //   name: 'size',
    //   message: 'What size do you need?',
    //   choices: ['Jumbo', 'Large', 'Standard', 'Medium', 'Small', 'Micro'],
    //   filter(val) {
    //     return val.toLowerCase();
    //   },
    // },
  ])
//   .then((answers) => {
//     console.log(JSON.stringify(answers, null, '  '));
//   });
   
   return opt

}

const Pause = async()=>{

    const next = await inquirer.prompt([
        {
            type: 'input',
            name: 'theme',
            message: `Para continuar presione ${'ENTER'.green} por favor`,
        }
    ])

    return next

}

module.exports ={
    Menu,
    Pause
}

