const app = require('express')()
const bodyParser = require('body-parser')
const produtosController = require('./Routers/Produtos')
const morgan = require("morgan")

const port = 3005

app.use(morgan("dev"))
app.use(bodyParser.json())
app.use('/', produtosController)

app.listen(port, () => {
    console.log('Servidor on em http://localhost:' + port)
})