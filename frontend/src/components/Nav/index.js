import React from 'react';
import {Link} from 'react-router-dom';

import {Navigator,NavButton,NavRow} from './styles';


const Nav = ()=>(
    <Navigator>
        <NavRow>
            <Link to="/"><NavButton>Login</NavButton></Link>
            <Link to="/Register"><NavButton>Register</NavButton></Link>
            <Link to="/Account"><NavButton>Edit account</NavButton></Link>
            <Link to="/Users"><NavButton>List Users</NavButton></Link>
        </NavRow>
    </Navigator>
)

export default Nav;