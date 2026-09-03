import UserEntity from "../entities/userEntities"
import AuthMiddleware from "../middleware/autheMiddleware"
import UserRepository from "../repositories/userRepository"

export default class LoginController{
    #repository
    constructor(){
        this.#repository = new UserRepository()
    }

    async Validate(req,res){
        try{
            const { email, password } = req.body
            if(email && password  ){
                let user = await this.#repository.ValidateEmail(email, password)
                if(user){
                    let auth = new AuthMiddleware()
                    let token = auth.generadJWT(user.id,user.name,user.email,user.profileId.id)
                    res.cookie("ruby", token, {httpOnly: true})
                    return res.status(200).json({token: token})
                }
            }
            return res.status(404).json({message: "User not exist"})                
        }
        catch(err){
            console.log(err)
        }
    }
}