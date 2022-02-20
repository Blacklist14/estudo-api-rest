const express = require('express');
const Pedidos = require('../DATABASE/pedidos')
const router = express.Router()

//Pega pedidos
router.get('/Pedidos/:id_pedido',async (req,res) => {
   //Id para localizar o pedido
   const numero_pedido = req.params.id_pedido
   //Busca pedidos pelo id
   const verifiPedidos = await Pedidos.findOne({
      where:{numero_pedido}
   })
   if(verifiPedidos <= [0]){
      return res.status(404).json({mesagem:"pedido inexistente"})
   }else{
      return res.status(200).json(verifiPedidos)
   }
})
// Cria um novo pedido
router.post('/Pedidos', async (req,res) => {
   const {quantidade_produto,produtoId,clientId} = req.body
   const novoPedido = await Pedidos.create({quantidade_produto,produtoId,clientId})
   res.status(201).json(novoPedido)
})

module.exports = router