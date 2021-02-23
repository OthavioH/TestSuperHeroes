import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import Main from './pages/main';
import Register from './pages/register';
import Account from './pages/account';
import UsersList from './pages/usersList';

export default function Routes(){
    return(
        <BrowserRouter>
            <Route exact path="/" component={Main}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/account" component={Account}/>
            <Route exact path="/users" component={UsersList}/>
        </BrowserRouter>
    );
}