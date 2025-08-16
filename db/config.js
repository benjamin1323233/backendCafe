import mongoose from "mongoose";
try {
    mongoose.connect(process.env.MONGODB).then(()=>{
        console.info("base de datos completada")
    })
} catch (error) {
    console.error(error)
}
export default mongoose