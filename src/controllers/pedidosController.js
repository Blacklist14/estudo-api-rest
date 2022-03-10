const Pedidos = require('../database/pedidos');

module.exports = {
    getAll: async (req, res) => {
        const verifiPedidos = await Pedidos.findAll().then((response) => {
                if (response != []) {
                    return res.status(200).json({
                        Success: response
                    })
                } else {
                    res.status(404).json({
                        Error: "no existing order"
                    })
                }
            },
            (error) => {
                res.status(404).json(error)
            })


    },
    get: async (req, res) => {
        //Id para localizar o pedido
        const numero_pedido = req.params.id_pedido
        //Busca pedidos pelo id
        const verifiPedidos = await Pedidos.findOne({
            where: {
                numero_pedido
            }
        }).then((response)=>{
            if (response != undefined) {
                return res.status(200).json({
                    Success: verifiPedidos
                })
            } else {
                return res.status(404).json({
                    Error: "non-existent order"
                })
            }
        },(error)=>{return res.status(404).json(error)})
        
    },
    post: async (req, res) => {
        const {
            quantidade_produto,
            produtoId,
            clientId
        } = req.body
        const novoPedido = await Pedidos.create({
                quantidade_produto,
                produtoId,
                clientId
            })
            .then((Success) => {
                return res.status(201).json({
                    Success: Success
                })
            }, (Error) => {
                return res.status(400).json({
                    Error: Error
                })
            })

    }
}