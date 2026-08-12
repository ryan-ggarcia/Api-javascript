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
        // Devolve o array com status 200
        return res.status(200).json(taks_array)
    }

    insert(req,res){
        // Pega o nome do corpo da requisição
        const {name} = req.body
        if (name){
            // Guarda em uma variavel a nova tarefa
            let new_task = {id: Date.now(),name:name}
            taks_array.push(new_task) // Adiciona a nova tarefa no array
            res.status(201).json(taks_array) // Resposta de sucesso
        }else{
            res.status(400).json("Params not defined!") // Resposta de erro
        }
    }

    update(req,res){
        const {id,name} = req.body
        if(id != null && id != undefined){
            // Busca o id dentra variavel task_array
            let find_id = taks_array.find((task) => task.id == id)
            if (find_id != undefined){
                // Substitui o nome do array pelo novo nome digitado
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
            // Filtra apenas aquelas tarefas que são diferente do id digitado
            taks_array = taks_array.filter((task) => task.id != id)
            // Busca a tarefa excluida para confirmar a sua exclusão
            if ( taks_array.find((task)=> task.id == id) == undefined )
                res.status(201).json(taks_array)
            else
                res.status(500).json("Internal server error... ")
        }else{
            res.status(400).json("Params not defined")
        }
    }

}