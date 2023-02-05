import Users from "../Model/Users";

class SessionControler{
    async store(req, res){
        const {email} = req.body;
        
        let user = await Users.findOne({email})
        
        if(!user){
            let user = await Users.create({email});
            return res.json(user)
        }else{
            return res.json("Usuario já existe")
        }
    }    
}

export default new SessionControler();
