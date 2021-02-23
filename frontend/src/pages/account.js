import React from 'react';

import Nav from '../components/Nav/index';
import {Container,Section,Form,Label,Title,Input,SubmitButton} from '../styles/styles';
import GlobalStyle from '../styles/global';

export default function Account(){
    return(
        <Container>
            <Nav/>
            <Section>
                <Form>
                    <Title>Edit account</Title>
                    <Label>Name:</Label>
                    <Input type="text"></Input>
                    <Label>Email:</Label>
                    <Input type="email"></Input>
                    <Label>Phone:</Label>
                    <Input type="telephone"></Input>
                    <SubmitButton>EDIT</SubmitButton>
                </Form>
            </Section>
            <GlobalStyle/>
        </Container>
    );
}