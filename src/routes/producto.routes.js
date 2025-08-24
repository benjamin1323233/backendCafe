import { Router } from "express";
import { crearProducto, leerProductoPorId, LeerProductos, test } from "../controllers/productos.controllers.js";

const router = Router();
//get past put delete
//get obtener
//post subir
router.route("/test").get(test)
router.route("/").get(LeerProductos).post(crearProducto)
router.route("/:id").get(leerProductoPorId)
export default router;