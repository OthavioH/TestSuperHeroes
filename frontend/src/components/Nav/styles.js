import styled from 'styled-components';

export const NavRow = styled.div`
    width:100%;
    postion:relative;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: center;
`;

export const NavButton = styled.button`
    min-width:100px;
    position:relative;
    margin-top:4px;
    margin-bottom:4px;
    height:40px;
    border:2px solid #27db72;
    padding:10px;
    border-radius:10px;
    background:#068039;
    color:#fff;
    font-weight:bold;
    box-shadow:2px 4px 8px #000;
    cursor:pointer;
    margin-right:10px;
    &:hover {
        box-shadow:2px 4px 4px #000;
    }

    @media(max-width:700px){
        width:auto;
        font-size:12px;
        height:auto;
    }
`;


export const NavLogout = styled.button`
    min-width:100px;
    position:relative;
    margin-top:4px;
    margin-bottom:4px;
    height:40px;
    border:none;
    padding:10px;
    border-radius:10px;
    background:#fe1a00;
    color:#fff;
    font-weight:bold;
    box-shadow:2px 4px 8px #000;
    cursor:pointer;
    margin-right:10px;
    &:hover {
        box-shadow:2px 4px 4px #000;
    }
`;

export const Navigator = styled.div`
    width:100%;
    position:absolute;
    top:0;
    min-width:500px;

    @media(max-width:700px){
        margin-left:5em;
    }
    
`;