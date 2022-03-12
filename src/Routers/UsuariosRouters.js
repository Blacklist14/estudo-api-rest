const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();
require("dotenv").config();
const verifyJWT = require("./jsonToken")
const usuarioController = require("../controllers/usuariosController.js")

// Pega todos usuarios
router.get("/Usuarios",verifyJWT,usuarioController.get)
// Cria novo usuario
router.post("/Usuarios",usuarioController.post)
// Deleta um usuario
router.delete("/Usuarios/:id_usuario",verifyJWT,usuarioController.delete)
// Atualiza dados usuario
router.put("/Usuarios/:id_usuario",verifyJWT,usuarioController.put)

module.exports = router;