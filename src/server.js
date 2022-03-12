const app = require('express')()
const router = require("./Router")
require("dotenv").config()
const morgan = require("morgan")
const express = require('express')

const port = process.env.PORT

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(router)

app.listen(port, () => {
    console.log('Servidor on em http://localhost:' + port)
})