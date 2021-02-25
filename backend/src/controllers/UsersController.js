const UserModel = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig.json');

module.exports ={
    async store(req,res){
        const{nome,email,senha,tipo_user} = req.body;
        
        const userExists = await UserModel.findOne({where:{email:email}})
        if(userExists)
            return res.json({error:'Existe um usuário com este email'});
        
        const user = await UserModel.create({
            nome:nome,
            email:email,
            senha:await bcrypt.hash(senha,10),
            tipo_user:tipo_user
        })
        .catch((err)=>{
            return res.json({error:err});
        });

        user.senha = undefined;
        return res.json({user,token:generateToken({email:email})});
    }
}

function generateToken(params = {}){
    return jwt.sign(params, authConfig.secret,{
        expiresIn:86400,
    });
}