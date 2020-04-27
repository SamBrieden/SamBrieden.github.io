import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { black, green, gray } from '@vschool/lotus'
import logo from './assets/VS_Mark_White.png'

export default function(){
    const routeLocation = useLocation()
    return (
        <DashboardNav>
            <Logo src={logo} />
            <CourseHeader>COURSE</CourseHeader>
            <CourseItem>Full Stack JavaScript</CourseItem>
            <ModuleNavItem to='/mantis/0' active={routeLocation.pathname === '/mantis/0' ? 'truthy' : ''}>Module 0</ModuleNavItem>
            <ModuleNavItem to='/mantis/1' active={routeLocation.pathname === '/mantis/1' ? 'truthy' : ''}>Module 1</ModuleNavItem>
            <ModuleNavItem to='/mantis/2' active={routeLocation.pathname === '/mantis/2' ? 'truthy' : ''}>Module 2</ModuleNavItem>
            <ModuleNavItem to='/mantis/3' active={routeLocation.pathname === '/mantis/3' ? 'truthy' : ''}>Module 3</ModuleNavItem>
            <ModuleNavItem to='/mantis/4' active={routeLocation.pathname === '/mantis/4' ? 'truthy' : ''}>Module 4</ModuleNavItem>
            <ModuleNavItem to='/mantis/5' active={routeLocation.pathname === '/mantis/5' ? 'truthy' : ''}>Module 5</ModuleNavItem>
            <ModuleNavItem to='/mantis/6' active={routeLocation.pathname === '/mantis/6' ? 'truthy' : ''}>Module 6</ModuleNavItem>
        </DashboardNav>
    )
}

const DashboardNav = styled.div`
    box-sizing: border-box;
    background: ${black};
    color: #fbf9f7;
    min-height: 100vh;
    padding: 35pt 25pt;
    width: 240pt;
    position: fixed;
    top: 0;
    left: 0;
`
const Logo = styled.img`
    height: 30pt;
    margin-bottom: 30pt;
`
const CourseHeader = styled.h6`
    margin: 0;
    letter-spacing: 1pt;
    color: ${green.base};
`
const CourseItem = styled.h3`
    margin-top: 10pt;
    margin-bottom: 40pt;
`
const ModuleNavItem = styled(Link)`
    text-decoration: none;
    color: ${props => props.active ? gray.lighter : gray.dark};
    background-color: ${props => props.active && 'rgba(250,250,250,.05)'};
    box-sizing: border-box;
    width: 100%;
    height: 45pt;
    margin: 0;
    display: flex;
    align-items: center;
    padding: 0 10pt;
    border: ${props => props.active ? 'solid rgba(250,250,250,.2) 1pt' : 'solid rgba(0,0,0,0) 1pt'};
    font-size: 14pt;
    font-weight: bold;
    }
`