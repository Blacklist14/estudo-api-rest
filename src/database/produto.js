const Sequelize = require("sequelize")
const database = require("./db")
//Cria tabela produtos
const Produto = database.define('produto', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    estoque:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    preco: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    descricao:{
        type: Sequelize.STRING,
        allowNull: false
    }
})

Produto.sync()
module.exports = Produto