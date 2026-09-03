import UserEntity from "../entities/userEntities"
import UserRepository from "../repositories/userRepository"

export default class UserController {
    #repository

    constructor() { this.#repository = new UserRepository }

    async Create(req, res) {
        try {
            const { name, email, active, password, profile } = req.body
            let entity = new UserEntity(0, name, email, Number(active), password, profile)
            if (entity.Validate()) {
                let newUser = await this.#repository.Create(entity)
                if (newUser)
                    return res.status(200).json({ message: "Success" })
                return res.status(500).json({ message: "Error... Try again later." })
            }
            return res.status(404).json({ message: "Not fold" })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: "Internal error." })
        }

    }

    async Read(req, res) {
        try {
            let allUsers = await this.#repository.Read()
            if (allUsers)
                return res.status(200).json(allUsers)
            return res.status(500).json({ message: "Internal error." })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: "Internal error." })
        }
    }

    async Update(req, res) {
        try {
            const { id, name, email, active, password, profile } = req.body
            let entity = new UserEntity(Number(id), name, email, Number(active), password, profile)
            if (entity.Validate()) {
                let updateUser = await this.#repository.Update(entity)
                if (updateUser)
                    return res.status(200).json({ message: "User updated successfully" })
                return res.status(500).json({ message: "Error... Try again later." })
            }
            return res.status(400).json({ message: "Error... Try again later." })
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: "Internal error." })
        }
    }

    async Delete(req, res) {
        try {
            const { id } = req.params
            
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: "Internal error." })
        }
    }
}