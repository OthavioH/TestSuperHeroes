import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Login from './pages/login';
import RegisterPersonagem from './pages/registerPersonagem';
import Register from './pages/register';
import Account from './pages/account';
import PersonagensList from './pages/personagensList';
import Personagem from './pages/personagem';
import Logout from './pages/logout';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/registerPersonagem" component={RegisterPersonagem}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/account" component={Account}/>
            <Route exact path="/" component={PersonagensList}/>
            <Route path="/personagem" component={Personagem}/>
            <Route path="/logout" component={Logout}/>
        </BrowserRouter>
    );
}