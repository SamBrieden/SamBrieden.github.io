import React from 'react'
import './styles.css'
import DashboardNav from './DashboardNav.js'
import DashboardContent from './DashboardContent.js'
import styled from 'styled-components'

export default function(){
    return(
        <DashBoardContainer>
            <DashboardNav/>
            <DashboardContent/>
        </DashBoardContainer>
    )
}

const DashBoardContainer = styled.div`
    margin-left: 240pt;
    margin-top: -100pt;
`