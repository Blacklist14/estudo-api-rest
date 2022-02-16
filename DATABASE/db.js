const Sequelize = require('sequelize')


const sequelize = new Sequelize("db","root","root",{
    dialect: "mysql",
    host: "0.0.0.0",
    port: 3306
})

module.exports = sequelize