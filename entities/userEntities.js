import ProfileEntity from "./profileEntity"

export default class UserEntity{
    #id
    #name
    #email
    #active
    #password
    #profileId

    constructor({id, name, email, active, password, profileId}){
        this.#id = id
        this.#name = name
        this.#email = email
        this.#active = active
        this.#password = password
        this.#profileId = profileId
    }
    get id(){return this.#id}
    get name(){return this.#name}
    get email(){return this.#email}
    get active(){return this.#active}
    get password(){return this.#password}
    get profileId(){return this.#profileId}

    set id(id){this.#id = id}
    set name(name){this.#name = name}
    set email(email){this.#email = email}
    set active(active){this.#active = active}
    set password(password){this.#password = password}
    set profileId(profileId){this.#profileId = profileId}

    Map(user){
        return new UserEntity(user.id, user.name, user.email, user.active, user.password, new ProfileEntity(user.profileId)) 
    }

    Validate(){
        if(this.#name == "" && this.#email == "" && this.#password == "" && this.#profileId == 0 && this.#active === undefined)
            return false
        return true
    }
    toJSON(){
        return{
            id: this.#id,
            name: this.#name,
            email: this.#email,
            active: this.#active,
            password: this.#password,
            profileId: this.#profileId
        }
    }
}