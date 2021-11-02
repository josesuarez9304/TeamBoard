//importa express
import express from "express";
import role from "../controllers/role.js";
const router =express.Router()

//http://localhost:3001/api/role/registerRole
router.post("/registerRole",role.registerRole);

// no lleva llaves por q no es funcion
export default  router