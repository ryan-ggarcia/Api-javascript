let taks_array = [{
    id: 1,
    name: "Hello, World!"
},
{
    id: 2,
    name: "Hello, World 2!"
},
]

export default class TasksController {

    find_task(req, res) {
        try {
            const { id } = req.params
            let find_by_id = taks_array.find((task) => task.id == id)
            if (find_by_id)
                res.status(201).json(find_by_id)
            else
                res.status(404).json("Params not defined!")
        } catch (err) {
            console.log(err)
            res.status(500).json({ message: "Error Unexpected" })
        }
    }

    list(req, res) {
        // Devolve o array com status 200
        try {
            return res.status(200).json(taks_array)
        } catch (err) {
            console.log(err)

            res.status(500).json({ message: "Error Unexpected" })
        }

    }

    insert(req, res) {
        try {
            const { name } = req.body
            if (name != " ") {
                // Guarda em uma variavel a nova tarefa
                let new_task = { id: Date.now(), name: name }
                taks_array.push(new_task) // Adiciona a nova tarefa no array
                res.status(201).json(taks_array) // Resposta de sucesso
            } else
                res.status(400).json("Params not defined!") // Resposta de erro
                
        } catch (err) {
            console.log(err)

            res.status(500).json({ message: "Error Unexpected" })
        }
    }

    update(req, res) {
        try {
            const { id, name } = req.body

            if (id >= 0 && name != " ") {
                // Busca o id dentra variavel task_array
                let find_id = taks_array.find((task) => task.id == id)

                if (find_id != undefined) {
                    // Substitui o nome do array pelo novo nome digitado
                    find_id.name = (name)
                    res.status(201).json(taks_array)
                } else
                    res.status(404).json("Error... resource not found")
            } else
                res.status(400).json("Params not defined!")

        } catch (err) {

            console.log(err)

            res.status(500).json({ message: "Error Unexpected" })
        }

    }

    delete(req, res) {
        try {
            const { id } = req.params

            let find_id = taks_array.find((task) => task.id == id)

            if (!find_id)
                return res.status(400).json("Params not defined!")

            taks_array = taks_array.filter((task) => task.id != id)

            return res.status(201).json(taks_array)

        }catch (err){
            console.log(err)
            res.status(500).json( { message: "Error Unexpected"} )
        }
    }

}