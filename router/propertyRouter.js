import express from 'express'
import PropertyControl from '../control/propertyControl.js'

const router = express.Router()
let controller = new PropertyControl()

router.get('/', (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.summary = "Lista todas as propriedades cadastradas"
    controller.read(req, res)
})
router.post('/', (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.summary = "Cria uma nova propriedade"
    controller.create(req, res)
})
router.put('/', (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.summary = "Atualiza uma propriedade existente"
    controller.update(req, res)
})
router.delete('/:id', (req, res) => {
    // #swagger.tags = ['Property']
    // #swagger.summary = "Exclui uma propriedade existente"
    controller.delete(req, res)
})

export default router