const UserModel = require('../models/Users');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authConfig = require('../config/authConfig.json');

module.exports = {
    async show(req,res){
        const {email,senha} = req.body;

        const user = await UserModel.findOne({where:{email:email}});

        if(!user)
            return res.json({error:'É amigão, esse email ainda não foi cadastrado'});
        
        if(!await bcrypt.compare(senha,user.senha))
            return res.json({error:'Essa senha tá inválida hein'});
      
        user.senha = undefined;

        return res.json({user,token:generateToken({email:email})});
    },
}

function generateToken(params = {}){
    return jwt.sign(params,authConfig.secret,{
        expiresIn:86400,
    })
}