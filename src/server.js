const app = require('express')()
const router = require("./Router")
require("dotenv").config()

const port = process.env.PORT

app.use(router)

app.listen(port, () => {
    console.log('Servidor on em http://localhost:' + port)
})