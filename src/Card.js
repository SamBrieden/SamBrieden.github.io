import React from 'react'
import styled from 'styled-components'
import CardHeader from './CardHeader.js'

export default function (props) {
    function mapCallback (item, i) {
        if(item.type === 'image'){
            return <Image imgPath={item.data} position={item.position} key={i}></Image>
        } else if (item.type === 'title'){
            return <Title key={i}>{ item.data }</Title>
        } else if (item.type === 'link') {
            return <PLink href={item.path}>{ item.data }</PLink>
        } else {
            return <Copy key={i}>{ item.data }</Copy>
        }
    }
    const mappedContentOne = props.contentOne.map(mapCallback)
    const mappedContentTwo = props.contentTwo.map(mapCallback)
    return (
        <CardContainer backgroundColor={props.backgroundColor} id={props.category}>
            <CardHeader category={props.category} subHeader={props.subHeader} />
            <Content>
                { mappedContentOne }
            </Content>
            <Content>
                { mappedContentTwo }
            </Content>
        </CardContainer>
    )
}

const CardContainer = styled.div`
    padding-top: 50px;
    
    display: grid;
    background: ${ props => props.backgroundColor };
    @media(min-width: 600px) {
        grid-template-columns: 1fr 1fr;
    }
`
const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 10px 40px;
    padding-top: 20px;
    @media(min-width: 600px) {
        padding-top: 50px;
    }
    
`
const Image = styled.div`
    height: 250px;
    width: 250px;
    background-image: url('${props => props.imgPath || '/assets/V-School-Banner.jpeg'}');
    margin-bottom: 20px;
    margin-top: 40px;
    background-size: cover;
    background-position: ${ props => props.position || 'center' };
    box-shadow: 2px 2px 4px rgba(0,0,0,.5);
`
const Copy = styled.p`
    font-size: 18px;
    text-indent: 30px;
    margin: 0;
    margin-bottom: 20px;
`
const Title = styled.h2`
    margin-top: 0;
    width: 100%;
    font-size: 30px;
`

const PLink = styled.a`
    display: flex;
    width: 150px;
    padding: 10px 20px;
    background: rgba(20, 20, 50, 1);
    color: white;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    margin: 20px;
    box-shadow: 2px 2px 6px rgba(0,0,0,.5);
`