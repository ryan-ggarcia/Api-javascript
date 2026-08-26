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
}
