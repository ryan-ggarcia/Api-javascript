import express from 'express'
import TasksController from '../controller/tasks_controller.js'
const router = express.Router()

let controller = new TasksController()
router.get("/", (req,res)=>{ 
    // #swagger.tags = ['Task']
    // #swagger.summary = 'List all tasks'
    constroller.list(req,res) 
})
router.post("/",(req,res)=>{ 
    // #swagger.tags = ['Task']
    // #swagger.summary = 'Create new task'
    constroller.insert(req,res) 
})
router.put("/", (req,res)=>{ 
    // #swagger.tags = ['Task']
    // #swagger.summary = 'Update task exist'
    constroller.update(req,res) 
})
router.delete("/:id", (req,res)=>{ 
    // #swagger.tags = ['Task']
    // #swagger.summary = 'Delete your task'
    constroller.delete(req,res) 
})
router.get("/:id", (req,res)=>{ 
    // #swagger.tags = ['Task']
    // #swagger.summary = 'Find your task by id'
    constroller.find_task(req,res) 
})

export default router