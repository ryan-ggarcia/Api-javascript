import express from 'express'
import UserRepository from '../repositories/userRepository'

const router = express.Router()

let controller = new UserRepository()

router.post('/', controller.ValidateEmail)

export default router