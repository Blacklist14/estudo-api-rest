const express = require('express');
const Pedidos = require('../database/pedidos');
const verifyJWT = require("./jsonToken");
const router = express.Router();

//Pega todos pedidos
router.get('/Pedidos',verifyJWT, async (req,res) => {
   const verifiPedidos = await Pedidos.findAll()
   if(verifiPedidos != []){
      return res.status(200).json({Success:verifiPedidos})
   }
   else{res.status(404).json({Error:"no existing order"})}
   
})
//Pega apenas um pedido
router.get('/Pedidos/:id_pedido',verifyJWT,async (req,res) => {
   //Id para localizar o pedido
   const numero_pedido = req.params.id_pedido
   //Busca pedidos pelo id
   const verifiPedidos = await Pedidos.findOne({
      where:{numero_pedido}
   })
   if(verifiPedidos != undefined){
      return res.status(200).json({Success:verifiPedidos})
   }else{
      return res.status(404).json({Error:"non-existent order"})
   }
})
// Cria um novo pedido
router.post('/Pedidos',verifyJWT, async (req,res) => {
   const {quantidade_produto,produtoId,clientId} = req.body
   const novoPedido = await Pedidos.create({quantidade_produto,produtoId,clientId})
   .then((Success) => {
         return res.status(201).json({Success:Success})
      },(Error)=>{
         return res.status(400).json({Error:"Non-existent Product or User"})
      }
   )
   
})

module.exports = router