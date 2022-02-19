const express = require('express');
const Produto = require('../DATABASE/produto')
const router = express.Router()

// Pega Todos os Produtos
router.get('/Produtos', async (req, res) => {
    const produto = await Produto.findAll();
    return res.status(200).json(produto)
})
// Cria novos produtos
router.post('/Produtos', async (req, res) => {
    const {nome,preco,descricao} = req.body;
    const novoProduto = await Produto.create({nome, preco,descricao})

    return res.status(201).json({ menssagem: "Produto criado"})
       
});
// Deleta produto
router.delete('/Produtos/:id_name', async (req, res) => {
    const id = req.params.id_name

    // BUSCA SE EXISTE ID 
    const consuProduto = await Produto.findOne({
        where: {id}
    })
    if (consuProduto === null) {
        return res.status(404).json({
            erro: "ID não encontrado"
        })
    } else {
        console.log(consuProduto)
        const delProduto = await Produto.destroy({
            where: {id}
        })
        return res.status(200).json({
            id,
            message: "Deletado"
        })
    }
})
// Atualiza produto
router.patch('/Produtos/:id_produto',async (req,res) => {
    const id = req.params.id_produto
    const produtoUp = req.body

    const consuProduto = await Produto.findOne({
        where: {id}
    })
    if(consuProduto === null){
        return res.status(404).json({message:"Produto inexistente"})
    }
    else{
        const attProduto = await Produto.update(produtoUp,
        {
            where:{id}
        })
        return res.status(200).json({message:"Update concluido",id})
    }
})
module.exports = router;