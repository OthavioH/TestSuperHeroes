import styled from "styled-components";

export const Container = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding-bottom:30px;
`;

export const Section = styled.section`
    width:100%;
    display:flex;
    align-items: center;
    justify-content: center;
    min-height:400px;

    @media(max-width:700px){
        position:absolute;
        top:8%;
    }
`;

export const Footer = styled.footer`
    width:100%;
    height:50px;
    margin-top:1em;
    background:#000;
`;

export const Form = styled.form`
    width:30%;
    display:flex;
    flex-direction:column;
    min-width:300px;
    min-height:150px;
    background:white;
    border:5px solid #068039;
    border-radius:10px;
    color:#000;
    font-size:20px;
    padding: 2px 15px;
    position:absolute;
    top:0;
    margin-top:100px;

    @media(max-width:700px){
        margin-top:10px;
    }
`;

export const Title = styled.p`
    font-weight:bold;    
    text-align:center;
    margin-bottom:10px;
    border-bottom:4px solid #008a13;
    padding:10px;
`;

export const Label = styled.p`
    float:left;
    font-size:18px;
`;

export const LabelError = styled.p`
    width:100%;
    color:red;
    text-align:center;
    font-size:16px;
    word-break;keep-all;
`;

export const PersonagemLabel = styled.div`
    width:39%;
    font-size:15px;
    font-weight:bold;
`;

export const Input = styled.input`
    width:50%;
    min-width:200px;
    height:30px;
    background:#9ef7b6;
    border-radius:4px;
    border:4px solid #6ca67b;
    margin-left:25px;
    margin-bottom:20px;
    padding:0px 10px;
    color:#000;
    font-weight:bold;
`;

export const Radio = styled.input`
    width:30px;
    height:20px;
    margin-bottom:20px;
    color:#000;
    font-weight:bold;
`;

export const RadioGroup = styled.div`
    width:100%;
    display:grid;
    grid-template-columns:repeat(2,1fr);
`;

export const DescInput = styled.textarea`
    width:50%;
    min-width:200px;
    height:70px;
    background:#9ef7b6;
    border-radius:4px;
    border:4px solid #6ca67b;
    margin-left:25px;
    margin-bottom:5px;
    padding:2px 5px;
    color:#000;
    font-weight:bold;
    overflow:auto;
`;

export const SubmitButton = styled.button`
    width:100%;
    height:30px;
    background:#006de8;
    border:none;
    border-radius:4px;
    color:#fff;
    font-size:16px;
    margin-top:10px;
    margin-bottom:15px;
    cursor:pointer;
`;

export const List = styled.div`
    width:59%;
    display:flex;
    flex-direction:column;
    min-width:400px;
    background:#fff;
    border:3px solid #068039;
    border-radius:10px;
    color:#000;
    font-size:20px;
    padding: 2px 10px;
    margin:4em 0;
    position:absolute;
    top:0;
    box-shadow:2px 4px 16px #000;


    @media(max-width:700px){
        min-width:350px;
        margin-top:10px;
        position:relative;
    }
`;

export const PersonagemPage = styled.div`
    width:59%;
    display:flex;
    flex-direction:column;
    min-width:400px;
    background:white;
    border:3px solid #068039;
    border-radius:10px;
    color:#000;
    font-size:20px;
    padding: 2px 10px 10px;
    box-shadow:2px 4px 16px #000;
    margin-top:5em;
    margin-bottom:5em;

    @media(max-width:700px){
        min-width:350px;
        margin-top:10px;
    }
`;

export const PersonaList = styled.div`
    width:100%;
    display:grid;
    grid-gap:3em;
    grid-template-columns:repeat(3,22%);
    margin-bottom:10px;
    align-items: center;
    justify-content: space-around;

    @media(max-width:700px){
        grid-template-columns:repeat(2,33%);
        grid-gap:1em;
    }
`;

export const PersonaItem = styled.div`
    background:#fcfcfc;
    border-radius:8px;
    display:flex;
    flex-direction:column;
    box-shadow:2px 4px 8px #000;
`;

export const EmptyText = styled.p`    
    text-align:center;
    margin-bottom:10px;
    padding:10px;
`;

export const Data = styled.div`
    width:100%;
    min-height:100px;
    display:flex;
    flex-direction:column;
    font-size:13px;
    text-align:center;
    word-break:keep-all;
    margin-top:10px;
`;

export const PersonagemData = styled.div`
    position:relative;
    width:100%;
    min-height:100px;
    display:flex;
    flex-direction:row;
    font-size:13px;
    margin-top:10px;
`;

export const DataRow = styled.div`
    width:100%;
    display:flex;
    flex-direction:column;
    word-break:keep-all;
`;

export const Nome = styled.p`
    width:100%;
    font-size:18px;
    font-weight:bold;
`;

export const Desc = styled.p`
    width:99%;
    padding:4px;
`;

export const ActionRow = styled.div`
    position:relative;
    bottom:0;
    right:0;
    width:100%;
    min-width:100px;
    height:30px;
`;

export const Pagination = styled.div`
    min-height:30px;
    display:flex;
    justify-content:space-between;
    margin-bottom:10px;
    border-top:4px solid #008a13;
    padding-top:8px;
`;

export const PaginationItem = styled.div`
    margin:0 8px;
    text-align:center;
    padding: 2px 7px;
    border-radius:8px;
    color:#fff;
    background:#008a13;
    box-shadow:2px 2px 2px #000;
    cursor:pointer;
`;

export const PaginationRow = styled.div`
    display:flex;
`;