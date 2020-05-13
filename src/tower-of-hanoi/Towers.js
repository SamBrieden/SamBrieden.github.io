import React, { useState, useEffect } from 'react'
import useMove from './useMove.js'
import useInterval from './useInterval.js'
import TowerCard from './TowerCard.js'
import styled from 'styled-components'

export default function ({ towerData, setDiskCount, setReset }) {
    const [ delay, setDelay ] = useState(9999999)
    const [ disks , moveDisk] = useMove(towerData)
    useInterval(moveDisk, delay)
    
    useEffect(() => {
        moveDisk( 1 , 1, true)
        disks.isComplete && setDelay(9999999)
    }
    , [towerData, disks.isComplete])

    return (
        <HanoiApp>
            <div style={{display: 'flex'}}>
                <TowerCard disks={disks.t1} diskCount={disks.diskCount}/>
                <TowerCard disks={disks.t2} diskCount={disks.diskCount} />
                <TowerCard disks={disks.t3} diskCount={disks.diskCount} />
            </div>
            <Controls>
                <ButtonControls onClick={ delay > 500 ? () => setDelay(500) : () => setDelay(9999999) }>{ delay === 500 ? 'Pause' : "Solve"}</ButtonControls>
                <ButtonControls onClick={() => {
                    setDiskCount(prevDisks => prevDisks + 1)
                    setDelay(9999999)
                    }}>Add</ButtonControls>
                { towerData.diskCount !== 0 && <ButtonControls onClick={() => {
                    setDiskCount(prevDisks => prevDisks - 1)
                    setDelay(9999999)
                    }}>Remove</ButtonControls>}
                <ButtonControls onClick={() => {
                    setReset(prev => !prev)
                    setDelay(9999999)
                    }}>Reset</ButtonControls>
            </Controls>
        </HanoiApp>
    )
}

const HanoiApp = styled.div`
    box-sizing: border-box;
    background: #f8f8f8;
    height: 100vh;
    border-top: 50px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex-wrap: wrap;
    overflow: hidden;
`
const Controls = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    bottom: 0;
    background: black;
    cursor: pointer;
`
const ButtonControls = styled.div`
    border: solid rgba(0,0,0,1) 7px;
    font-size: 16px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #333;
    color: white;
    padding: 10px 20px;
    border-radius: 4px;
`