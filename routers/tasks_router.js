import express from 'express'
import TasksController from '../controller/tasks_controller.js'
const router = express.Router()

let controller = new TasksController()
router.get("/", controller.list)
router.post("/", controller.insert)
router.put("/", controller.update)
router.delete("/", controller.delete)

export default router