import PropertyRepository from "../repositories/propertyRepository.js";
import PropertyEntity from "../entities/propertyEntity.js";

export default class PropertyControl {
    #repository
    constructor() {
        this.#repository = new PropertyRepository()
    }

    async create(req, res) {
        try {
            const { desc, cep, address, neighborhood, city, value, available } = req.body
            let entity = new PropertyEntity(0, desc, cep, address, neighborhood, city, parseInt(value), available)
            if (entity.Validate()) {
                let property = await this.#repository.create(entity)
                if (property)
                    return res.status(201).json(property)
                return res.status(400).json({ message: "Error... Try again later." })
            }
            return res.status(500).json( {message: "Error... Try again later."})
        }
        catch (err) {
            console.log(err)
            return res.status(404).json({ message: "not foud" })
        }

    }
    async read(req, res) {
        try {
            let propertyRead = await new PropertyRepository().read()
            return res.status(200).json(propertyRead)
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: "Internal error " })
        }
    }
    async update(req, res) {
        try {
            const {id, desc, cep, address, neighborhood, city, value, available } = req.body
            let entity = new PropertyEntity(parseInt(id), desc, cep, address, neighborhood, city, parseInt(value), available)
            if(entity.Validate()){
                let property = await this.#repository.update(entity)
                if(property)
                    return res.status(200).json({message: "Property updated successfully"})
                return res.status(400).json({ message: "Error... Try again later." })
            }
            return res.status(500).json( {message: "Error... Try again later."})
        }
        catch (err) {
            console.log(err)
            return res.status(500).json({ message: "Internal error " })
        }
    }
    async delete(req, res) {
        try{
            const { id } = req.params
            let entity = new PropertyEntity(parseInt(id))
            let property = await this.#repository.delete(entity)
            if(property)
                return res.status(200).json({message: "Property deleted successfully"})
            return res.status(400).json({ message: "Error... Try again later." })
        }
        catch(err){
            console.log(err)
            return res.status(500).json({ message: "Internal error " })
        }
    }
}