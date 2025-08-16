import mongoose from "mongoose";
try {
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.info("base de datos completada")
        //aqui vemos si se conecta a mongo db
    })
} catch (error) {
    console.error(error)
}
export default mongoose