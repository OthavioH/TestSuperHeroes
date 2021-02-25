const authMiddleware = require('./middlewares/auth');
const express = require('express');

const usersController = require('./controllers/UsersController');
const personagemController = require('./controllers/PersonagemController');
const authController = require('./controllers/AuthController');




const routes = express.Router();


routes.get('/all_personagens',personagemController.index);
routes.get('/personagem',personagemController.show);
routes.post('/create_user',usersController.store);
routes.post('/sign_in',authController.show);

routes.put('/update_personagem',authMiddleware,personagemController.update);
routes.post('/create_personagem',authMiddleware,personagemController.store);
routes.delete('/delete_personagem/:id',authMiddleware,personagemController.delete);


module.exports = routes;