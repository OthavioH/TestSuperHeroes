const Sequelize = require('sequelize');
const database = require('../config/db');

const UserModel = database.define('user',{
    id:{
        type:Sequelize.UUID,
        defaultValue:Sequelize.UUIDV4,
        allowNull:false,
        primaryKey:true
    },
    nome:{
        type:Sequelize.STRING,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false
    },
    senha:{
        type:Sequelize.STRING,
        allowNull:false
    },
    tipo_user:{
        type:Sequelize.STRING,
        allowNull:false
    }
});

module.exports = UserModel;