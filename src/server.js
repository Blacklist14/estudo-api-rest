const app = require('express')()
const router = require("./Router")
require("dotenv").config()
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('../swagger_output.json')
const cors = require("cors")
const port = process.env.PORT

app.use(cors())
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(router)

app.listen(port, () => {
    console.log('Servidor on em http://localhost:' + port)
})