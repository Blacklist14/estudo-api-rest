const Produto = require('../database/produto')

module.exports = {
    get:  async (req, res) => {
        const produto = await Produto.findAll();
        return res.status(200).json(produto)
    },
    post: async (req, res) => {
        const {nome,estoque,preco,descricao} = req.body;
        const novoProduto = await Produto.create({nome,estoque,preco,descricao}).then(()=>{
                return res.status(201).json({ Success: "Product created"})
            }
        ,(error)=>{
            return res.status(400).json({ Error: error}) 
        })    
    },
    delete:async (req, res) => {
        const id = req.params.id_name
    
        // BUSCA SE EXISTE ID 
        const consuProduto = await Produto.findOne({
            where: {id}
        })
        if (consuProduto === null) {
            return res.status(204).json({
                Error: "ID not found"
            })
        } else {
            console.log(consuProduto)
            const delProduto = await Produto.destroy({
                where: {id}
            }).then(()=>{
                return res.status(200).json({id,Success: "Deleted" })
            },(error)=>{
                return res.status(400).json({Error:error})
            })
        }
    },
    patch: async (req,res) => {
        const id = req.params.id_produto
        const produtoUp = req.body
    
        const consuProduto = await Produto.findOne({
            where: {id}
        })
        if(consuProduto != undefined){
            const attProduto = await Produto.update(produtoUp,{ where:{id}})
                return res.status(200).json({Success:"Update completed",id})
        }
        else{
            return res.status(404).json({Error:"non-existent product"})
            
        }
    }
}