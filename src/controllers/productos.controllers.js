export const test =(req, res) => {//el req es de request, el res es el resultado, es decir lo que vamios a responder,y next en caso de hacer otras funciones
  res.status(200).send("primera prueba desde el backend");//aqui tu eliges que poner en el resultado por ejemplo se pone 200 cuando se realizo exitosamente el request
}

export const LeerProductos=(req,res)=>{

}
//agregar funcion para crear producto
export const crearProducto=(req,res)=>{
  try{
 //1-recibir el objeto por crear
 console.log(req.body)
 //2-validar datos del objeto
 //3-guardar en base de datos
 //4-enviar respuesta
  }catch(error){
    console.error(error)
  }

}
//agregar funcipn para ei¿ditar producto