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
        allowNull: true
    },
    preco: Sequelize.INTEGER,
    descricao: Sequelize.STRING
})

Produto.sync()
module.exports = Produto