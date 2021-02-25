import React,{useState,useEffect} from 'react';
import api from '../services/api';


import Nav from '../components/Nav/index';
import {Container,Section,Form,Label,Title,Input,SubmitButton,DescInput} from '../styles/styles';
import GlobalStyle from '../styles/global';

export default function RegisterPersonagem({history}){

    const [descCurta,setDescCurta] = useState('');
    const [descCompleta,setDescCompleta] = useState('');
    const [nome,setNome] = useState('');
    const [imageUrl,setImageUrl] = useState('');
    const token = localStorage.getItem("token");

    useEffect(()=>{
        if(!token){
            history.push('/');
        }
    });

    const spanStyle = {
        fontSize:'12px',
        textAlign:'right',
        marginRight:'70px',
        marginBottom:'10px'
    }

    async function handleSubmit(event){
        event.preventDefault();
        const headers = {
            'authorization':`${token}`,
            'Content-Type':'application/json'
        }
        const res = await api.post('/create_personagem',{
            nome:nome,
            descricao_curta:descCurta,
            descricao_completa:descCompleta,
            url_imagem:imageUrl
        },{headers:headers});

        if(res.data.error){
            return console.log(res.data.error);
        }
        document.getElementById('desc_completa').value = '';
        document.getElementById('desc_curta').value = '';
        document.getElementById('nome').value = '';
        document.getElementById('img_input').value = '';
        setDescCompleta('');
        setDescCurta('');
    }

    function handleDescLimit(divName){
        switch(divName){
            case 'completa':
                document.getElementById('span_completa').innerHTML = descCompleta.trim().length + '/150';
                break;
            case 'curta':
                document.getElementById('span_curta').innerHTML = descCurta.trim().length + '/80';
                break;
            default:
        }
    }
    return(
        <Container>
            <Nav/>
            <Section>
                <Form onSubmit={(e)=>{handleSubmit(e)}}>
                    <Title>Registrar personagem</Title>
                    <Label>Nome:</Label>
                    <Input id="nome" type="text" required onChange={(e)=>{setNome(e.target.value)}}></Input>
                    <Label>Descricao curta:</Label>
                    <DescInput id="desc_curta" type="text" maxLength='81' required onChange={(e)=>{setDescCurta(e.target.value);handleDescLimit('curta')}}></DescInput>
                    <span style={spanStyle} id="span_curta">0/80</span>
                    <Label>Descricao completa:</Label>
                    <DescInput id="desc_completa" type="text" maxLength='151' required onChange={(e)=>{setDescCompleta(e.target.value);handleDescLimit('completa')}}></DescInput>
                    <span style={spanStyle} id="span_completa">0/150</span>
                    <Label>URL da imagem</Label>
                    <Input id="img_input" type="text" required onChange={(e)=>{setImageUrl(e.target.value)}}></Input>
                    <SubmitButton>ENVIAR</SubmitButton>
                </Form>
            </Section>
            <GlobalStyle/>
        </Container>
    );

    
}