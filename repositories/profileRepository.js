import Database from "../db/db.js"
import ProfileEntity from "../entities/profileEntity.js"

export default class ProfileRepository{
    #db

    constructor(){ this.#db = new Database() }

    async Create(entity){
        const query = "INSERT INTO tb_perfil (per_nome) VALUE (?)"
        let value = [entity.name]
        let generatedId = await this.#db.ExecutaComandoLastInserted(query,value)
        entity.id = generatedId
        return entity.id != 0 ? entity.id : false
    }

    async Read(){
        const query = "SELECT * FROM tb_perfil"
        let rows = await this.#db.ExecutaComando(query)
        let list = []
        rows.map((row) => { list.push( ProfileEntity.Map(row) ) } )
        return list.length > 0 ? list : false
    }

    async Update(entity){
        const query = "UPDATE tb_perfil SET per_nome = ? WHERE per_id = ?"
        let values = [ entity.id, entity.name ]
        let updateProfile = await this.#db.ExecutaComandoNonQuery(query,values)
        return updateProfile ? true : false
    }

    async Delete(entity){
        const query = "DELETE FROM tb_perfil WHERE per_id = ?"
        let value = [entity.id]
        let deleteProfile = await this.#db.ExecutaComandoNonQuery(query,value)
        return deleteProfile ? true : false
    }

    async Find(entity){
        const query = "SELECT * FROM tb_perfil WHERE per_id = ?"
        let value = [ entity.id ]
        let findProfile = await this.#db.ExecutaComando(query,value)
        let profile = ProfileEntity.Map(findProfile[0])
        return profile ? profile : false
    }
}