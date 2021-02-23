const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const routes = require('./routes');
const server = express();

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({extended:true}));
server.use(morgan('dev'));
server.use(express.static('public'));

server.use(routes);
server.listen(3333);