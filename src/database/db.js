const Sequelize = require('sequelize')
require("dotenv").config()

const sequelize = new Sequelize(process.env.NAME_DB, process.env.USER_DB, process.env.PASSWORD_DB, {
    dialect: "mysql",
    host: "0.0.0.0",
    port: process.env.PORT_DB
})

module.exports = sequelize