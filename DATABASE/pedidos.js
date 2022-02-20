const Sequelize = require("sequelize")
const database = require("./db")
const Produtos = require("./produto")
const Usuarios = require("./usuarios")

// Cria tabela pedidos
const Pedidos = database.define("pedidos",{
    numero_pedido:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    quantidade_produto:{
        type: Sequelize.INTEGER,
        allowNull: false,
    }
})
// Cria chave estrangeira
Pedidos.belongsTo(Produtos,{
    foreignKey:{
        name:'produtoId',
        allowNull:false
    }
})
Pedidos.belongsTo(Usuarios,{
    foreignKey:{
        name:'clientId',
        allowNull:false
    }
})
Pedidos.sync()

module.exports = Pedidos