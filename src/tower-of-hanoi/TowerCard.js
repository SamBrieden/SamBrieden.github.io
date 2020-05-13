import React from 'react'
import styled from 'styled-components'

export default function ({ disks, diskCount }) {
    return (
        <Tower diskCount={diskCount}>
            { disks.map( eachDisk => <Disk  val={eachDisk}  key={eachDisk}/> ) }
        </Tower>
    )
}

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple', 'violet']

const Disk = styled.div`
    height: 10px;
    width: ${props => props.val * 20}px;
    background: ${ props => colors[props.val - 1] || 'black'};
    border-radius: 10px;
`

const Tower = styled.div`
    display: flex;
    flex-direction: column;
    justify-Content: flex-end;
    align-items: center;
    height: ${props => props.diskCount * 10}px;
    padding: 20px 10px;
    background: #777;
    width: ${props => props.diskCount * 20}px
`