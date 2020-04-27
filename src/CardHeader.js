import React from 'react'
import styled from 'styled-components'

export default function (props) {
    return (
        <HeaderContainer>
            <CardCategory>{ props.category }</CardCategory>
            <CardSubHeader>{ props.subHeader }</CardSubHeader>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    justify-self: flex-start;
    grid-column: 1/-1;
    margin-left: 10px;
`
const CardCategory = styled.h1`
    font-size: 45px;
    color: rgba(0,0,0,.1);
    margin: 0;
    margin-left: -10px;
    @media(min-width: 600px) {
        font-size: 96px;
        margin-left: -16px;
        margin-top: -20px;
    }
`
const CardSubHeader = styled.h3`
    font-size: 30px;
    color: rgba(0,0,0,.9);
    margin: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
    @media(min-width: 600px) {
        font-size: 45px;
        margin-left: -10px;
        margin-top: -20px;
    }
`
