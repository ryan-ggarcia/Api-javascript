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
            res.status(400).json("Params not defined!")
        }
    }

    update(req,res){
        const {id,name} = req.body
        if(id != null && id != undefined){
            let find_id = taks_array.find((task) => task.id == id)
            if (find_id != undefined){
                find_id.name = (name)
                res.status(201).json(taks_array)
            }else{
                res.status(404).json("Error... resource not found")
            }
        }else{
            res.status(400).json("Params not defined!")
        }
    }

    delete(req,res){
        const {id} = req.body
        if ( id != null && id != undefined){
            taks_array = taks_array.filter((task) => task.id != id)
            if ( taks_array.find((task)=> task.id == id) == undefined )
                res.status(201).json(taks_array)
            else
                res.status(500).json("Internal server error... ")
        }else{
            res.status(400).json("Params not defined")
        }
    }

}