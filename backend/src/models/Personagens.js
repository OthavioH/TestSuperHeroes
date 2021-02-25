const Sequelize = require('sequelize');
const database = require('../config/db');

const PersonagemModel = database.define('Personagem',{
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
    descricao_curta:{
        type:Sequelize.STRING,
        allowNull:false
    },
    descricao_completa:{
        type:Sequelize.STRING,
        allowNull:false
    },
    url_imagem:{
        type:Sequelize.STRING(500),
        allowNull:false
    }
})

module.exports = PersonagemModel;