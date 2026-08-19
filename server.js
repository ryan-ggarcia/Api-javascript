import express from 'express'
import TaskRouter from './routers/tasks_router.js'

const app = express()
const port = 1

app.use(express.json())

app.use("/task", TaskRouter)

app.listen(port, ()=>{
    console.log(`Server on-line in port: ${port}`)
})
