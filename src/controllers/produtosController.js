const Produto = require('../database/produto')

module.exports = {
    get:  async (req, res) => {
        try{
            const produto = await Produto.findAll();
            return res.status(200).json(produto)
        }catch(e){
            return res.status(500).json(e)
        }
    },
    post: async (req, res) => {
        const product = req.body
        try{
            const newProduct = await Produto.create(product)
            return res.status(201).json({ error:false,response: "Product created"})
        }catch(e){
            return res.status(400).json({error:true ,response:"invalid request content"})
        }

    },
    delete:async (req, res) => {
        const id = req.params.id_name
        try{
            // BUSCA SE EXISTE ID 
            const consuProduto = await Produto.findOne({
                where: {id}
            })
            if(consuProduto == null){
                res.status(400).json({error:true ,response:"id not found"})
            }
            else{
                try{
                    const delProduto = await Produto.destroy({
                        where: {id}
                    })
                    return res.status(200).json({error:false,response: "deleted"})
                }
                catch(e){
                    return res.status(400).json({error:true,response:e})
                }

            }
        }catch(e){
            return res.status(400).json({error:true ,response:"invalid request content"})
        }
    },
    put: async (req,res) => {
        const id = req.params.id_produto
        const update = req.body
        try{
            if(update.nome && !update.id){
                const consuProduto = await Produto.findOne({
                    where: {id}
                })
                if(consuProduto != undefined){
                    try{
                        await Produto.update(update,{ where:{id}})
                        return res.status(200).json({error:false,response:"Update completed",update})
                    }
                    catch(e){
                        return res.status(500).json({error:true,response:e})
                    }
                }
                else{
                    return res.status(404).json({error:true,response:"non-existent product"})
                    
                }
            }
            else{
                return res.status(400).json({error:true,response:e}) 
            }
        }catch{
            return res.status(400).json({error:true ,response:"invalid request content"})
        }
    }
}