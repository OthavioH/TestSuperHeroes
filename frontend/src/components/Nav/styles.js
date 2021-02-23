import styled from 'styled-components';

export const NavRow = styled.div`
    margin-left:33%;
`;

export const NavButton = styled.button`
    min-width:100px;
    margin-top:4px;
    margin-bottom:4px;
    height:40px;
    border:2px solid #27db72;
    padding:10px;
    border-radius:10px;
    background:#068039;
    color:#fff;
    font-weight:bold;
    margin-right:10px;
    box-shadow:2px 4px 2px #000;

    &:hover {
        box-shadow:1px 2px 2px #000;
    }
`;

export const Navigator = styled.div`
    width:100%;
    min-width:500px;
    height:100px;
    top:50%;
    left:75%;
    padding:5px 10px;
`;