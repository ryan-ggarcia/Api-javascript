import jwt from 'jsonwebtoken'
const SECREDO = "RUBYONRAILS"
export default class AuthMiddleware{

    generadJWT(id,name,email,profileId){
        let token = jwt.sign({id,name,email,profileId}, SECREDO)
        return token
    }

    async validation(req,res,next){

    }
}