import React,{useState,useEffect} from 'react';
import api from '../services/api';


import Nav from '../components/Nav/index';
import {Container,Section,Form,Label,Title,Input,SubmitButton, LabelError,RadioGroup, Radio} from '../styles/styles';
import GlobalStyle from '../styles/global';

export default function Register({history}){

    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [nome,setNome] = useState('');
    const [cfrSenha,setCfrSenha] = useState('');
    const [token,setToken] = useState('');
    const [userType,setUserType] = useState('');

    useEffect(() => {
        verifyToken();
    });

    function verifyToken(){
        setToken(localStorage.getItem("token"));
        if(token){
            history.push();
        }
    }

    async function handleSubmit(event){
        event.preventDefault();
        if(cfrSenha === senha){
            const res = await api.post('/create_user',{
                nome:nome,
                email:email,
                senha:senha,
                tipo_user:userType,
                authorization:token
            });
            
            if(res.data.error){
                return document.getElementById('label-error').innerHTML = res.data.error;
            }

            localStorage.setItem("token",res.data.token);
            localStorage.setItem("email",res.data.user.email);
            localStorage.setItem("user_type",res.data.user.tipo_user);

            document.getElementById('label-error').innerHTML = res.data.error;
            document.getElementById('nome').value = '';
            document.getElementById('email').value = '';
            document.getElementById('senha').value = '';
            document.getElementById('confirm-senha').value = '';

            history.push('/');
        }
        else{
            document.getElementById('label-error').innerHTML = 'As senhas precisam ser iguais.';
        }
        
    }

    return(
        <Container>
            <Nav/>
            <Section>
                <Form onSubmit={(e)=>{handleSubmit(e)}}>
                    <Title>Cadastrar usuário</Title>
                    <Label>Tipo de usuário</Label>
                    <RadioGroup>
                        <div>
                            <Radio type="radio" id="admin" name="user_type" value="admin" onChange={(e)=>{setUserType(e.target.value)}}/>
                            <Label htmlFor="admin">Admin</Label>
                        </div>
                        
                        <div>
                            <Radio type="radio" id="default" name="user_type" value="default" onChange={(e)=>{setUserType(e.target.value)}}/>
                            <Label htmlFor="default">Padrão</Label>
                        </div>
                       
                    </RadioGroup>
                    
                    <Label>Nome:</Label>
                    <Input id="nome" type="text" required onChange={(e)=>{setNome(e.target.value)}}></Input>
                    <Label>Email:</Label>
                    <Input id="email" type="email" required onChange={(e)=>{setEmail(e.target.value)}}></Input>
                    <Label>Senha:</Label>
                    <Input id="senha" type="password" minLength="6" required onChange={(e)=>{setSenha(e.target.value)}}></Input>
                    <Label>Confirmar senha:</Label>
                    <Input id="confirm-senha" minLength="6" type="password" required onChange={(e)=>{setCfrSenha(e.target.value)}}></Input>
                    <LabelError id="label-error"></LabelError>
                    <SubmitButton>ENVIAR</SubmitButton>
                </Form>
            </Section>
            <GlobalStyle/>
        </Container>
    );

    
}