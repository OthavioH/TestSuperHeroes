import React,{useState,useEffect} from 'react';
import api from '../services/api';

import Nav from '../components/Nav/index';
import {Container,Section,Form,Label,Title,Input,SubmitButton, LabelError} from '../styles/styles';
import GlobalStyle from '../styles/global';

export default function Login({history}){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');

    const [token,setToken] = useState('');

    useEffect(() => {
        verifyToken();
    });

    function verifyToken(){
        setToken(localStorage.getItem("token"));
        if(token){
            history.push('/');
        }
    }

    async function signIn(e){
        e.preventDefault();
        
        const res = await api.post('/sign_in',{
            email:email,
            senha:senha
        })

        if(res.data.error)
            return document.getElementById('label-error').innerHTML = res.data.error;
        
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("email",res.data.user.email);
        localStorage.setItem("user_type",res.data.user.tipo_user);
        history.push('/');
    }

    return(
        <Container>
            <Nav/>
            <Section>
                <Form onSubmit={(e)=>{signIn(e)}}>
                    <Title>Login</Title>
                    <Label>Email:</Label>
                    <Input type="email" required onChange={(e)=>{setEmail(e.target.value)}}></Input>
                    <Label>Password:</Label>
                    <Input type="password" required onChange={(e)=>{setSenha(e.target.value)}}></Input>
                    <LabelError id="label-error"></LabelError>
                    <SubmitButton>LOGIN</SubmitButton>
                </Form>
            </Section>
            <GlobalStyle/>
        </Container>
        
    )
}