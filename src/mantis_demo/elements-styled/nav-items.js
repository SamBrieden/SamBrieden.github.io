import { green, black, gray} from '@vschool/lotus'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const DashboardNav = styled.div`
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
export const Logo = styled.img`
    height: 30pt;
    margin-bottom: 30pt;
`
export const CourseHeader = styled.h6`
    margin: 0;
    letter-spacing: 1pt;
    color: ${green.base};
`
export const CourseItem = styled.h3`
    margin-top: 10pt;
    margin-bottom: 40pt;
`
export const ModuleNavItem = styled(Link)`
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