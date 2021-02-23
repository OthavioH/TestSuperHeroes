import React from 'react';

import Nav from '../components/Nav/index';
import {Container,Section,List,Title,UserItem,UserName,Data,Email,Phone} from '../styles/styles';
import GlobalStyle from '../styles/global';

export default function UsersList(){

    const imgStyle = {
        width:'100px',
        height:'100%',
        border:'1px solid #000'
    }

    return(
        <Container>
            <Nav/>
            <Section>
                <List>
                    <Title>Users</Title>
                    <UserItem>
                        <img src="http://localhost:3000/shrek.png" style={imgStyle} alt="shrek"/>
                        <Data>
                            <UserName>Othavio Henrico dos Santos Soares</UserName>
                            <Email>othavio2650@gmail.com</Email>
                            <Phone>(11)94262-1588</Phone>
                        </Data>
                    </UserItem>
                </List>
            </Section>
            <GlobalStyle/>
        </Container>
    );
}