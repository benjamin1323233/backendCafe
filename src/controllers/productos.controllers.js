import Producto from "../modules/producto.js";
export const test = (req, res) => {
  //el req es de request, el res es el resultado, es decir lo que vamios a responder,y next en caso de hacer otras funciones
  res.status(200).send("primera prueba desde el backend"); //aqui tu eliges que poner en el resultado por ejemplo se pone 200 cuando se realizo exitosamente el request
};

export const LeerProductos = async(req, res) => {
try{
 //buscar pruductos
 const listaProductos = await Producto.find()
 //enviar resp al front
 res.status(200).json(listaProductos)
}catch(error){
  console.error(error)
  res.status(500).json({mensaje:"error al compilar los datos"})
}
};
//agregar funcion para crear producto
export const crearProducto = async(req, res) => {
  try {
    //1-recibir el objeto por crear
   // console.log(req.body);
    //2-validar datos del objeto
    //3-guardar en base de datos
const nuevoProducto = new Producto(req.body);
await nuevoProducto.save()
    //4-enviar respuesta
    res.status(201).json({mensaje:"el objeto fue creado con exito"})
  } catch (error) {
    console.error(error);
    res.status(500).json({mensaje:"error al crear el producto"})
  }
};
export const leerProductoPorId= async(req,res)=>{
  try{
//obtener el param del req
/*console.log(req.params)
console.log(req.params.id)*/
  //pedir el producto por id
  const productoBuscado = await Producto.findById(req.params.id)
  if(!productoBuscado){
    return res.status(404).json({mensaje:"el producto no fue encontrado"})
  }
//mostrar el resultado
res.status(200).json(productoBuscado)
  }catch(error){
    console.error(error)
    res.status(501).json({mensaje:"error al obtener el producto seleccionado"})
  }
}
//agregar funcipn para ei¿ditar producto
