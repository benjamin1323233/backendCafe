import express from "express"
import cors from "cors"
import morgan from "morgan"
import {dirname} from "path"
import { fileURLToPath } from "url"

export default class Server{
    constructor(){
        this.app =express()//esto es solo para poder usar express
        this.port = process.env.PORT || 3000
        this.middlewares()//ejecuta lo de abajo
    }
    //AGREGAR METODOS
//middlewares
middlewares(){
    this.app.use(cors())//permite tener conexiones remotas
    this.app.use(express.json())//interpreta los datos en json que llegan en la solicitud
    this.app.use(morgan("dev"))//me va a dar el resultado de la solicitud
    //buscar la carpeta
    const  __dirname = dirname(fileURLToPath(import.meta.url))
    this.app.use(express.static(`${__dirname}/../public`))
    console.log(`${__dirname}/../public`)
}
//escuchar el puerto
listen(){
    this.app.listen(this.port, ()=>{
        console.info(`el servidor se esta ejecutando en: http://localhost:${this.port} `)
    })
    //arriba crea un link del puerto con el server

}
}