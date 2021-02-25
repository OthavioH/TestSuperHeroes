const Sequelize = require('sequelize');

const sequelize = new Sequelize('dbfirexx','dbfirexx','2021#Firex',{dialect:'mysql',host:'mysql743.umbler.com',port:41890});


module.exports = sequelize;