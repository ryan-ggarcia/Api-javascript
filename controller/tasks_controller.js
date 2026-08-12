let taks_array = [{
    id: 1,
    name: "Hello, World!" 
},
{
    id: 2,
    name: "Hello, World 2!" 
},
]

export default class TasksController{

    list(req,res){
        return res.status(200).json(taks_array)
    }

    insert(req,res){
        const {name} = req.body
        if (name){
            let new_task = {id: Date.now(),name:name}
            taks_array.push(new_task)
            res.status(201).json(taks_array)
        }else{
            res.status(400).json("params not defined!")
        }
    }

    update(req,res){

    }

    delete(req,res){

    }

}