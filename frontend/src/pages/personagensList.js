import React,{useEffect,useState} from 'react';
import api from '../services/api';
import {Link} from 'react-router-dom';

import Nav from '../components/Nav/index';
import {Container,Section,List,Title,PersonaItem,PersonaList,Nome,Data,Desc,EmptyText,Pagination,PaginationRow,PaginationItem} from '../styles/styles';
import GlobalStyle from '../styles/global';

export default function PersonagensList({history}){

    const [personagensData,setPersonagensData] = useState([]);
    const [total,setTotal] = useState(0);
    const limit = 9;
    const [pages, setPages] = useState([]);
    const [currentPage,setCurrentPage] = useState(1);
    const [totalPages,setTotalPages] = useState(1);

    const linkStyle = {
        color:'#000',
        textDecoration:'none',
    }
    const imgStyle = {
        width:'100%',
        height:'100px',
        borderTopLeftRadius:'8px',
        borderTopRightRadius:'8px',
    };


    useEffect(() => {
        (async ()=>{
            const res = await api.get(`/all_personagens?page=${currentPage}&limit=${limit}&total_pages=${totalPages}`);
            if(res.data.error){
                console.log(res.data.error);
            }
            else{
                setPersonagensData(res.data.personagens);
                setTotal(res.data.total_count);
                setTotalPages(Math.ceil(total/limit));
                const arrayPages = [];
                for(let i = 1;i<=totalPages;i++){
                    arrayPages.push(i);
                }
                setPages(arrayPages);
            }
        })()
    },[currentPage,total,totalPages]);

    return(
        <Container>
            <Nav/>
            <Section>
                <List>
                    <Title>Personagens</Title>
                    {personagensData.length>0 ? (<PersonaList>{personagensData.map((item,i)=>{
                        return (
                            <PersonaItem key={i}>
                                <Link to={`/personagem?id=${item.id}`} style={linkStyle}>
                                    <img src={item.url_imagem} style={imgStyle} alt="shrek"/>
                                    <Data>
                                        <Nome>{item.nome}</Nome>
                                        <Desc>{item.descricao_curta}</Desc>
                                    </Data>
                                </Link>
                            </PersonaItem>
                        );
                    })}</PersonaList>) : <EmptyText>Nenhum personagem criado</EmptyText>}
                    <Pagination>
                        <div>Total: {total} personagens</div>
                        <PaginationRow>
                            <PaginationItem onClick={()=>(currentPage-1<=0)?null:setCurrentPage(currentPage-1)}>{"<"}</PaginationItem>
                            {pages.map((page)=>(
                                <PaginationItem key={page} onClick={()=>setCurrentPage(page)}>{page}</PaginationItem>
                            ))}
                            <PaginationItem onClick={()=>(currentPage+1<=totalPages)?setCurrentPage(currentPage+1):null}> {">"}</PaginationItem>
                        </PaginationRow>
                    </Pagination>
                </List>
            </Section>
            <GlobalStyle/>
        </Container>

        
    );
}