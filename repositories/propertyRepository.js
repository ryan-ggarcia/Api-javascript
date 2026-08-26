import Database from '../db/db.js'
import PropertyEntity from '../entities/propertyEntity.js'
export default class PropertyRepository {
    #database

    constructor() {
        this.#database = new Database
    }

    async create(data) {
        const query = `insert into tb_imovel (imv_descricao,imv_cep,imv_endereco,imv_bairro,imv_cidade,imv_valor,imv_disponivel) 
        values (?,?,?,?,?,?,?)`
        const value = [data.desc, data.cep, data.address, data.neighborhood, data.city, data.value, data.available]
        let generatedId = await this.#database.ExecutaComandoLastInserted(query, value)
        data.id = generatedId
        return generatedId ? data.id : 0
    }

    async read() {
        const rows = await this.#database.ExecutaComando(`select * from tb_imovel`)
        return rows.map(r => new PropertyEntity(
            r.imv_id,
            r.imv_descricao,
            r.imv_cep,
            r.imv_endereco,
            r.imv_bairro,
            r.imv_cidade,
            r.imv_valor,
            r.imv_disponivel
        ))
    }

    async update(data) {
        const query = `update tb_imovel set imv_descricao = ?, imv_cep = ? 
        imv_endereco = ?, imv_bairro = ? imv_cidade = ?, imv_valor = ?, imv_disponivel
        where imv_id = ?`
        const value = [data.id]
        const result = await this.#database.ExecutaComandoNonQuery(query,value)
        return result ? result : null
    }

    delete(data) {
        const query = `delete from tb_imovel `
    }
}