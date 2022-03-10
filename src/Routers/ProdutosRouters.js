const express = require('express');
const router = express.Router()
const verifyJWT = require("./jsonToken")
const produtosController = require("../controllers/produtosController")


// Pega Todos os Produtos
router.get('/Produtos',verifyJWT,produtosController.get)
// Cria novos produtos
router.post('/Produtos',verifyJWT,produtosController.post);
// Deleta produto
router.delete('/Produtos/:id_name',verifyJWT,produtosController.delete)
// Atualiza produto
router.patch('/Produtos/:id_produto',verifyJWT,produtosController.patch)
module.exports = router;