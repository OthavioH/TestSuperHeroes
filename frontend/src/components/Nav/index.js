import React,{useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {Navigator,NavButton,NavRow,NavLogout} from './styles';



export default function Nav(props){

    const token = localStorage.getItem("token");
    const user_type = localStorage.getItem("user_type");
    console.log(user_type)
    const [goBack,setGoBack] = useState(false);

    useEffect(()=>{
        if(props.onlyGoBack===true){
            setGoBack(true);
        }
        else{
            setGoBack(false);
        }
    },[props])

    return(
        <Navigator>
            
                {goBack===true ? (
                    <NavRow>
                        <Link to="/"><NavButton>Voltar para os personagens</NavButton></Link>
                    </NavRow>
                ) : (
                    <NavRow>
                        {user_type==='admin' && token ?<Link to="/registerPersonagem"><NavButton>Registrar Personagem</NavButton></Link>:null}
                        <Link to="/"><NavButton>Personagens</NavButton></Link>
                        {!token ? (<Link to="/register"><NavButton>Cadastrar Usuário</NavButton></Link>) : (<Link to="/logout"><NavLogout>Logout</NavLogout></Link>)}
                        {!token ? (<Link to="/login"><NavButton>Login</NavButton></Link>) :null}
                    </NavRow>
                )}
        </Navigator>
    );
}