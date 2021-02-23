import styled from "styled-components";

export const Container = styled.div`
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`;

export const Section = styled.section`
    width:100%;
    min-height:400px;
    margin-top:10px;
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
    margin:0px 35%;
    font-size:20px;
    padding: 2px 15px;
`;

export const Title = styled.p`
    font-weight:bold;    
    text-align:center;
`;

export const Label = styled.p`
    float:left;
    font-size:18px;
`;

export const Input = styled.input`
    width:50%;
    min-width:200px;
    height:30px;
    background:#9ef7b6;
    border-radius:10px;
    border:4px solid #6ca67b;
    margin-left:25px;
    margin-bottom:20px;
    padding:0px 10px;
    color:#000;
    font-weight:bold;
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
`;

export const List = styled.div`
    width:30%;
    display:flex;
    flex-direction:column;
    min-width:300px;
    min-height:400px;
    background:white;
    border:5px solid #068039;
    border-radius:10px;
    color:#000;
    margin:0px 35%;
    font-size:20px;
    padding: 2px 0px;
    overflow:auto;
`;

export const UserItem = styled.div`
    width:100%;
    height:80px;
    border-top:1px solid #e6e6e6;
    display:flex;
    flex-direction:row;
`;

export const Data = styled.div`
    width:100%;
    height:100%;
    display:flex;
    flex-direction:column;
    padding:0p 10px;
    font-size:13px;
`;

export const UserName = styled.p`
    width:100%;
    margin:0px 4px;
    font-weight:bold;
`;

export const Email = styled.p`
    width:100%;
    margin:0px 4px;
`;

export const Phone = styled.p`
    width:100%;
    margin:0px 4px;
    font-weight:bold;
`;