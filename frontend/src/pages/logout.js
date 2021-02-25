import React, { useEffect } from 'react';

export default function Logout({history}){
    const token = localStorage.getItem("token");
    useEffect(() => {
        if(token){
            localStorage.removeItem("token");
            localStorage.removeItem("email");
            localStorage.removeItem("user_type");
        }
        history.push('/');
    }, [token,history])

    return(
        <h1>logout</h1>
    );
}