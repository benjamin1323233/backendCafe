import { Router } from "express";
import { crearProducto, LeerProductos, test } from "../controllers/productos.controllers.js";

const router = Router();
//get past put delete
router.route("/test").get(test)
router.route("/").get(LeerProductos).post(crearProducto)
export default router;