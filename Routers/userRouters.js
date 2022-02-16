const express = require('express');
const Produto = require('../DATABASE/produto')
const router = express.Router()


router.get('/',async (req,res) => {
    const novaProduto = await Produto.create({
        nome:"carro",
        preco: 5000,
        descricao:"CARRO FODIDO"
    })
    console.log(novaProduto)
    res.send(novaProduto)
});

module.exports = router;