const { green } = require("colors")
const Tarea = require("./Tarea")

class Tareas {

    _listado = {}

    get listadoArr(){

        const lista = []

        Object.keys(this._listado).forEach( key => {
            const tarea = this._listado[key]
            lista.push(tarea)
        })

        return lista
    }

    cargarTareasFromArray(tareas = []){

        tareas.forEach(tarea =>{

            this._listado[tarea.id] = tarea

        })
    }

    constructor(){
        this._listado = {}
    }

    crearTarea( desc = '' ){

        const tarea = new Tarea( desc )
        this._listado[tarea.id] = tarea

    }

    listaCompleta(){

        console.log()

        this.listadoArr.forEach((tarea,i)=>{

            const idx = `${i+1}`.green
            const { desc, completadoEn }= tarea
            const estado = (completadoEn)? 'Completada'.green : 'Pendiente'.red

            console.log(`${idx} ${desc} :: ${estado}`)

        })

    }

    listaCompletadas(){

        console.log()

        const completadas = this.listadoArr.filter((tarea)=>tarea.completadoEn !== null)


        completadas.forEach((tarea, i)=>{

            const idx = `${i+1}`.green
            const { desc }= tarea
            const estado =`${tarea.completadoEn}`.green

            console.log(`${idx} ${desc} :: ${estado}` )

        })

    }

    listaPendientes(){

        console.log()

        const pendientes = this.listadoArr.filter((tarea)=>tarea.completadoEn === null)


        pendientes.forEach((tarea, i)=>{

            const idx = `${i+1}`.green
            const { desc }= tarea
            const estado = (tarea.completadoEn)? 'Completada'.green : 'Pendiente'.red

            console.log(`${idx} ${desc} :: ${estado}`)

        })

    }

    borrarTarea(id =''){

        if( this._listado[id]){
            delete this._listado[id]
        }

    }

    toggleCompletadas(ids=[]){

        ids.forEach( id => {

            const tarea = this._listado[id]

            if(!tarea.completadoEn){
                tarea.completadoEn = new Date().toISOString()
            }

        })

        this.listadoArr.forEach(tarea=>{

            if(!ids.includes(tarea.id)){
                this._listado[tarea.id].completadoEn = null
            }

        })

    }


}

module.exports = Tareas