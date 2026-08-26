import PropertyRepository from "../repositories/propertyRepository.js";
import { properySchema } from "../schemas/properySchemas.js";

export default class PropertyControl{
    async create(req,res){
        try{
            const createSchema = properySchema.parse(req.body)
            let property = await new PropertyRepository().create(createSchema)
            if (property != 0)
                return res.status(201).json({message:"Success! your property is create."})

            return res.status(500).json("Error... Try again later.")
        }
        catch(err){
            console.log(err.issues)
            return res.status(404).json({message: "not foud"})
        }
        
    }
    async read(req,res){
        try{
            let propertyRead = await new PropertyRepository().read()
            return res.status(200).json(propertyRead)
        }
        catch(err){
            console.log(err)
            return res.status(500).json({message: "Internal error "})
        }
    }
    async update(req,res){
        try{
            const updateSchema = properySchema.parse(req.body)
            let property = await new PropertyRepository().update(updateSchema)
        }
        catch(err){

        }
    }
    async delete(req,res){
        
    }
}