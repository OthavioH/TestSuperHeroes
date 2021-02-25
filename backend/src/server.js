const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const database = require('./config/db');


const server = express();

(async()=>{

    try{
        await database.sync();
        console.log('database synced');
    }
    catch (error){
        console.log(error);
    }
})();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(morgan('dev'));
server.use(express.static('public'));

server.use(routes);
server.listen(3333);