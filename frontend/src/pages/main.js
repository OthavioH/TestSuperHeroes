import React from 'react';

import Nav from '../components/Nav/index';
import {Container,Section,Form,Label,Title,Input,SubmitButton} from '../styles/styles';
import GlobalStyle from '../styles/global';

export default function Main(){

    return(
        <Container>
            <Nav/>
            <Section>
                <Form>
                    <Title>Login</Title>
                    <Label>Email:</Label>
                    <Input type="email"></Input>
                    <Label>Password:</Label>
                    <Input type="password"></Input>
                    <SubmitButton>LOGIN</SubmitButton>
                </Form>
            </Section>
            <GlobalStyle/>
        </Container>
        
    )
}