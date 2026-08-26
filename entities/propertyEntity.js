export default class PropertyEntity{
    #id
    #desc
    #cep
    #address
    #neighborhood
    #city
    #value
    #available

    constructor(id,desc,cep,address,neighborhood,city,value,available){
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
    set id(id) { this.#id = id }

    get desc() { return this.#desc }
    set desc(desc) { this.#desc = desc }

    get cep() { return this.#cep }
    set cep(cep) { this.#cep = cep }

    get address() { return this.#address }
    set address(address) { this.#address = address }

    get neighborhood() { return this.#neighborhood }
    set neighborhood(neighborhood) { this.#neighborhood = neighborhood }

    get city() { return this.#city }
    set city(city) { this.#city = city }

    get value() { return this.#value }
    set value(value) { this.#value = value }

    get available() { return this.#available }
    set available(available) { this.#available = available }

}
