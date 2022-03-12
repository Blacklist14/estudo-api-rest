const Pedidos = require('../database/pedidos');

module.exports = {
    getAll: async (req, res) => {
        const verifiPedidos = await Pedidos.findAll()
            try{
                if (verifiPedidos != []) {
                    return res.status(200).json({ error:false,response:verifiPedidos })
                } else {
                    res.status(404).json({error:true,response: "no existing order"})
                } 
            }catch{
                return res.status(400).json({error:true ,response:"invalid request content"})
            }
            


    },
    get: async (req, res) => {
        const numero_pedido = req.params.id_pedido
        try{
            const verifiPedidos = await Pedidos.findOne({
                where: {
                    numero_pedido
                }
            })
            if (verifiPedidos != undefined) {
                return res.status(200).json({error:false,response: verifiPedidos })
            } else {
                return res.status(404).json({error:true,response: "non-existent order"})
            }
        }
        catch{
            return res.status(400).json({error:true ,response:"invalid request content"})
        }
        
    },
    post: async (req, res) => {
        const pedidos = req.body
        try{
            await Pedidos.create(pedidos)
            return res.status(201).json({error:true,response:"order created"})
        }catch(e){
            return res.status(400).json({error:true ,response:"invalid request content"})
        }

    }
}