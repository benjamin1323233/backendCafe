import mongoose, {Schema} from "mongoose";
const productoSchema = new Schema ({
    nombreProducto: {
        type: String,
        minLength:2,
        maxLenght:100,
        required:true,
        unique:true
    },
    precio:{
        type: Number,
        required:true,
        min:50,
        max:100000
    },
    imagen:{
    type: String,
    required: true,
    validate:{
        validator: (valor)=>{
        return /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?(\.(jpg|jpeg|png|webp))$/.test(valor)
    }}
    },
    categoria: {
        type: String,
        enum:["Infusiones","Batidos","Dulce","Salado"],
        required:true,

    },
    descripcion_breve:{
        type: String,
        minLength:5,
        maxLenght:250,
        required:true
    },
    descripcion_amplia:{
        type: String,
        minLength:10,
        maxLenght:500,
        required:true,
    }
})

const Producto = mongoose.model("producto", productoSchema)
export default Producto;