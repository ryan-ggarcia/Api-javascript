export default class PropertyEntity {
    #id
    #desc
    #cep
    #address
    #neighborhood
    #city
    #value
    #available

    constructor(id, desc, cep, address, neighborhood, city, value, available) {
        this.#id = id
        this.#desc = desc
        this.#cep = cep
        this.#address = address
        this.#neighborhood = neighborhood
        this.#city = city
        this.#value = value
        this.#available = available
    }
    get id() { return this.#id }
    get desc() { return this.#desc }
    get cep() { return this.#cep }
    get address() { return this.#address }
    get neighborhood() { return this.#neighborhood }
    get city() { return this.#city }
    get value() { return this.#value }
    get available() { return this.#available }

    set id(id) { this.#id = id }
    set desc(desc) { this.#desc = desc }
    set cep(cep) { this.#cep = cep }
    set address(address) { this.#address = address }
    set neighborhood(neighborhood) { this.#neighborhood = neighborhood }
    set city(city) { this.#city = city }
    set value(value) { this.#value = value }
    set available(available) { this.#available = available }

    static Map(entity) {
        return new PropertyEntity(
            entity['imv_id'],
            entity['imv_descricao'],
            entity['imv_cep'],
            entity['imv_endereco'],
            entity['imv_bairro'],
            entity['imv_cidade'],
            entity['imv_valor'],
            entity['imv_disponivel']
        )

    }

    Validate() {
        if (this.#desc == "" && this.#cep == "" && this.#address == "" && this.#neighborhood == "" && this.#city == "" && this.#value == 0 && this.#available == false)
            return false
        return true
    }
    toJSON() {
        return {
            id: this.#id,
            desc: this.#desc,
            cep: this.#cep,
            address: this.#address,
            neighborhood: this.#neighborhood,
            city: this.#city,
            value: this.#value,
            available: this.#available
        }
    }
}
