const app = require('express')()
const router = require("./Router")
require("dotenv").config()
const cors = require("cors")
const morgan = require("morgan")
const bodyParser = require('body-parser')

const port = process.env.PORT

app.use(cors())
app.use(morgan("dev"))
app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
    console.log('Servidor on em http://localhost:' + port)
})