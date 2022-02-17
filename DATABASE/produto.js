const Sequelize = require("sequelize")
const database = require("./db")

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
    preco: Sequelize.DECIMAL,
    descricao: Sequelize.STRING

})
module.exports = Produto