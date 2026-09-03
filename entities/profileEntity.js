export default class ProfileEntity{
    #id
    #desc

    constructor({id, desc}){
        this.#id = id
        this.#desc = desc
    }

    get id(){return this.#id}
    get desc(){return this.#desc}

    set id(id){this.#id = id}
    set desc(desc){this.#desc = desc}

    static Map(profile){
        return new ProfileEntity(profile.id, profile.desc) 
    }

    Validate(){
        if(this.#desc == "")
            return false
        return true
    }

    toJSON(){
        return{
            id: this.#id,
            desc: this.#desc
        }
    }
}