const express = require('express');
const Pedidos = require('../DATABASE/pedidos');
const Produto = require('../DATABASE/produto');
const Usuarios = require('../DATABASE/usuarios');
const verifyJWT = require("./jsonToken")
const router = express.Router()

//Pega todos pedidos
router.get('/Pedidos',verifyJWT, async (req,res) => {
   const verifiPedidos = await Pedidos.findAll().then((reponse) => {
      if(reponse <= [0]){
         res.status(404).json({Error:"no existing order"})
      }
      return res.status(200).json({Success:reponse})
   }).catch((Error) => {
      res.status(404).json({Error:Error})
   })
   
})
//Pega apenas um pedido
router.get('/Pedidos/:id_pedido',verifyJWT,async (req,res) => {
   //Id para localizar o pedido
   const numero_pedido = req.params.id_pedido
   //Busca pedidos pelo id
   const verifiPedidos = await Pedidos.findOne({
      where:{numero_pedido}
   })
   if(verifiPedidos <= [0]){
      return res.status(204).json({Error:"non-existent order"})
   }else{
      return res.status(200).json({Sucess:verifiPedidos})
   }
})
// Cria um novo pedido
router.post('/Pedidos',verifyJWT, async (req,res) => {
   const {quantidade_produto,produtoId,clientId} = req.body
   const novoPedido = await Pedidos.create({quantidade_produto,produtoId,clientId})
   .then((Success) => {
         return res.status(201).json({Sucess:Success})
      },(Error)=>{
         return res.status(400).json({Error:"Non-existent Product or User"})
      }
   )
   
})

module.exports = router