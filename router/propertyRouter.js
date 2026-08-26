import express from 'express'
import PropertyControl from '../control/propertyControl.js'

const router = express.Router()
let controller = new PropertyControl()

router.get('/', controller.read)
router.post('/', controller.create)
router.put('/', controller.update)
router.delete('/', controller.delete)

export { router }