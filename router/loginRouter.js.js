import express from 'express'
import LoginController from '../controller/loginController.js'

const router = express.Router()

let controller = new LoginController()

router.post("/", (req, res) => {

    controller.Validate(req, res);
})

export default router