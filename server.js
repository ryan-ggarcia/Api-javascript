import express from 'express'
import PropertyRouter from './router/propertyRouter.js'
import LoginRouter from './router/loginRouter.js.js'
import swaggerUi from  'swagger-ui-express'

import {createRequire} from 'module'
const require = createRequire(import.meta.url);
const outputJson = require("./swagger_output.json");

const app = express()

const port = 5000

app.use(express.json())

app.use("/docs", swaggerUi.serve, swaggerUi.setup(outputJson));
app.use('/property', PropertyRouter)
app.use("/login", LoginRouter)

app.listen(port, ()=>{
    console.log(`Server on-line in port: ${port}`)
})
