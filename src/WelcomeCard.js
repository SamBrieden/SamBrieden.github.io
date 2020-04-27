import React from 'react'
import styled from 'styled-components'
import CardHeader from './CardHeader.js'

export default function () {
    return (
        <WelcomeContainer>
            <CardHeader category='Portfolio' subHeader='Sam Brieden'/>
            <Padding></Padding>
            <NavLinks href="#Experiences">Experiences</NavLinks>
            <NavLinks href="#Projects">Projects</NavLinks>
            <NavLinks href="#Education">Education</NavLinks>
            <NavLinks href="#Tutorials">Tutorials</NavLinks>
            <NavLinks href="#Random">Random</NavLinks>
            <Padding></Padding>
        </WelcomeContainer>
    )
}

const WelcomeContainer = styled.div`
    background: white;
    display: flex;
    flex-direction: column;
`
const NavLinks = styled.a`
    display: inline-block;
    cursor: pointer;
    width: 120px;
    margin-top: 15px;
    font-size: 21px;
    color: rgba(0,0,0,.5);
    padding: 10px 40px;
    border-bottom: solid 1px rgba(0,0,0,0);
    text-decoration: none;
    margin-left: 20px;

   :hover{
        color: rgba(0,0,0,.8);
        transition: ease-in 300ms;
    }
`
const Padding = styled.div`
    height: 50px;
`