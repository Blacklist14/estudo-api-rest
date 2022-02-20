const Sequelize = require("sequelize")
const database = require("./db")

// Cria tabela usuarios
const Usuarios = database.define('usuarios',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    cpf:{
        type:Sequelize.STRING(14),
        allowNull:true,
        unique:true
    }
})
Usuarios.sync()

module.exports = Usuarios