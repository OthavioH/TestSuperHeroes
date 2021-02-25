import React,{useState,useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import api from '../services/api';

import excluir from '../assets/excluir.svg';
import editar from '../assets/edicao.png';
import checkMark from '../assets/check_mark.png';
import crossMark from '../assets/cross_mark.png';
import Nav from '../components/Nav/index';
import {Container,Section,Title,PersonagemPage,Desc,PersonagemData, Data, PersonagemLabel,DataRow,ActionRow, Input,Label} from '../styles/styles';
import GlobalStyle from '../styles/global';

export default function Personagem({history}){

    const imgStyle = {
        width:'30%',
        minWidth:'200px',
        height:'200px',
        borderRadius:'8px',
        boxShadow:'1px 1px 2px #000'
    };

    const iconStyle = {
        width:'30px',
        height:'30px',
        float:'right',
        marginRight:'10px',
        cursor:'pointer'
    }

    const [data,setData] = useState([]);
    const [onEditMode,setOnEditMode] = useState(false);
    const [descricaoCurta,setDescricaoCurta] = useState('');
    const [descricaoCompleta,setDescricaoCompleta] = useState('');
    const [imageURL,setImageURL] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);

    const [token,setToken] = useState('');
    const user_type = localStorage.getItem("user_type");

    useEffect(() => {
        verifyToken();
    });

    function verifyToken(){
        setToken(localStorage.getItem("token"));
        if(token && user_type === 'admin'){
            setIsAdmin(true)
        }
        else{
            setIsAdmin(false);
        }
    }

    function useQuery(){
        return new URLSearchParams(useLocation().search);
    }

    const query = useQuery();
    const headers = {
        'authorization':`${token}`,
        'Content-Type':'application/json'
    }
    const id = query.get("id");

    useEffect(() => {
        (async ()=>{
            const res = await api.get(`/personagem?id=${id}`);
            if(res.data.error){
                return console.log(res.data.error);
            }
            return setData(res.data);
        })();
    },[id,onEditMode]);

    async function handleSubmit(){
        const res = await api.put('/update_personagem',{
            id:data.id,
            descricao_curta:descricaoCurta,
            descricao_completa:descricaoCompleta,
            url_imagem:imageURL
        },{headers:headers});
        if(res.data.error){
            console.log(res.data.error);
        }
        setOnEditMode(false);
    }

    async function handleDelete(){
        const res = await api.delete(`/delete_personagem/${query.get("id")}`,{headers:headers});
        if(res.data.error){
            return console.log(res.data.error);
        }
    }

    async function confirmDelete(){
        var r = window.confirm("Você tem certeza que quer excluir este personagem?");
        if(r===true){
            handleDelete();
            history.push('/');
        }
    }
    
    return(
        <Container>
            <Nav onlyGoBack={true}/>
            <Section>
                <PersonagemPage>
                    <Title>{data.nome}</Title>
                    <PersonagemData>
                        {
                            !onEditMode ? (<img src={data.url_imagem} style={imgStyle} alt={data.nome}/>):null
                        }
                        
                        <Data style={{textAlign:'left',paddingLeft:'6px'}}>
                            <DataRow>
                                <PersonagemLabel>Descrição curta:</PersonagemLabel>
                                <span>
                                    {!onEditMode ? (
                                        <Desc>{data.descricao_curta}</Desc>
                                    ) : (
                                        <Input type="text" required value={descricaoCurta} minLength="10" onChange={(e)=>{setDescricaoCurta(e.target.value)}}></Input>
                                    )}
                                </span>
                            </DataRow>
                            <DataRow>
                                <PersonagemLabel>Descrição completa:</PersonagemLabel>
                                <span>
                                    {!onEditMode ? (
                                        <Desc>{data.descricao_completa}</Desc>
                                    ) : (
                                        <Input type="text" required value={descricaoCompleta} minLength="10" onChange={(e)=>{setDescricaoCompleta(e.target.value)}}></Input>
                                    )}
                                </span>
                            </DataRow>
                            {
                                (onEditMode) ? (
                                    <DataRow>
                                        <Label htmlFor="image_url">URL da imagem</Label>
                                        <Input type="text" required value={imageURL} minLength="6" onChange={(e)=>{setImageURL(e.target.value)}}></Input>
                                    </DataRow>
                                    
                                ):null
                            }
                            {
                                isAdmin === true ?(
                                    <ActionRow>
                                        {!onEditMode ? (
                                            <span>
                                            <img id="img1" src={excluir} style={iconStyle} alt="excluir" onClick={()=>{confirmDelete();}}/>
                                            <img id="img2" src={editar} style={iconStyle} alt="editar" onClick={(e)=>{setOnEditMode(true);setDescricaoCompleta(data.descricao_completa);setImageURL(data.url_imagem);setDescricaoCurta(data.descricao_curta);}}/>
                                            </span>
                                        ) : (
                                            <span>
                                            <img id="img1" src={crossMark} style={iconStyle} alt="crossMark" onClick={(e)=>{setOnEditMode(false)}}/>
                                            <img id="img2" src={checkMark} style={iconStyle} alt="checkMark" onClick={(e)=>{handleSubmit()}}/>
                                            </span>
                                        )}  
                                    </ActionRow>
                                ):null
                            }
                        </Data>
                    </PersonagemData>
                </PersonagemPage>
            </Section>
            <GlobalStyle/>
        </Container>
    );
}