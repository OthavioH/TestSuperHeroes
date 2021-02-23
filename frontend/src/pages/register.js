import React from 'react';

import Nav from '../components/Nav/index';
import {Container,Section,Form,Label,Title,Input,SubmitButton} from '../styles/styles';
import GlobalStyle from '../styles/global';

export default function Register(){

    function handleSubtmit(event){
        event.preventDefault();
    }
    return(
        <Container>
            <Nav/>
            <Section>
                <Form onSubmit={(e)=>{handleSubtmit(e)}}>
                    <Title>Register</Title>
                    <Label>Name:</Label>
                    <Input type="text" required></Input>
                    <Label>Email:</Label>
                    <Input type="email" required></Input>
                    <Label>Phone:</Label>
                    <Input type="tel" pattern-="([0-9]{2})[0-9]{5}[0-9]{4}" required></Input>
                    <Label>Password:</Label>
                    <Input type="password" required></Input>
                    <Label>Confirm password:</Label>
                    <Input type="password" required></Input>
                    <SubmitButton>REGISTER</SubmitButton>
                </Form>
            </Section>
            <GlobalStyle/>
        </Container>
    );
}