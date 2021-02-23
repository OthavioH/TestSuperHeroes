const express = require('express');
const multer = require('multer');

const routes = express.Router();
routes.get('/',(req,res)=>{
    return res.send("Olá");
})


module.exports = routes;