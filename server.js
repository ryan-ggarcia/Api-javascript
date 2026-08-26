import express from 'express'
import swaggerUi from  'swagger-ui-express'
import {createRequire} from 'module'

const app = express()

const port = 5000

app.use(express.json())


app.listen(port, ()=>{
    console.log(`Server on-line in port: ${port}`)
})
