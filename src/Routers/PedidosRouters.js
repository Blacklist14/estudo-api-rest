const express = require('express');
const router = express.Router();
const verifyJWT = require("./jsonToken");
const pedidosController = require("../controllers/pedidosController.js")

//Pega todos pedidos
router.get('/Pedidos',verifyJWT, pedidosController.getAll)
//Pega apenas um pedido
router.get('/Pedidos/:id_pedido',verifyJWT,pedidosController.get)
// Cria um novo pedido
router.post('/Pedidos',verifyJWT, pedidosController.post)

module.exports = router