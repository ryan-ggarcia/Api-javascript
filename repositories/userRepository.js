import Database from "../db/db.js"
import UserEntity from "../entities/userEntities.js"

export default class UserRepository{
    #db

    constructor(){ this.#db = new Database() }

    async ValidateEmail(email, password){
        const query = "SELECT * FROM tb_usuario WHERE usu_email = ? AND usu_senha = ?"
        let values = [email,password]
        let row = await this.#db.ExecutaComando(query,values)
        return row ? UserEntity.Map(row[0]) : false
    }
    async Create(entity){
        const query = "INSERT INTO tb_usuario (usu_nome,usu_email,usu_ativo,usu_senha,per_id)"
        let values = [entity.nome,entity.email,entity.ativo,entity.senha,entity.profileId]
        let newUser = await this.#db.ExecutaComandoLastInserted(query,values)
        entity.id = newUser
        return entity.id > 0 ? entity.id : false
    }

    async Read(){
        const query = "SELECT * FROM tb_usuario"
        let rows = await this.#db.ExecutaComando(query)
        let list = []
        rows.map((row) => { list.push( UserEntity.Map(row) ) } )
        return list.length > 0 ? list : false
    }

    async Update(entity){
        const query = "UPDATE tb_usuario SET usu_nome = ?, usu_email = ?, usu_ativo = ? usu_senha = ? per_id = ? WHERE usu_id = ?"
        let values = [entity.nome, entity.email,entity.ativo,entity.senha,entity.profileId,entity.id]
        let updateUser = await this.#db.ExecutaComandoNonQuery(query,values)
        return updateUser ? true : false
    }

    async Delete(entity){
        const query = "DELETE FROM tb_usuario WHERE usu_id = ?"
        let values = [entity.id]
        let deleteUser = await this.#db.ExecutaComandoNonQuery(query,values)
        return deleteUser ? true : false
    }
}