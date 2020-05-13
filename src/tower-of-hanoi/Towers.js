import React, { useState, useEffect } from 'react'
import useMove from './useMove.js'
import useInterval from './useInterval.js'

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
        <>
            <div>Tower One { disks.t1.join(' ') }</div>
            <div>Tower Two { disks.t2.join(' ') }</div>
            <div>Tower Three { disks.t3.join(' ') }</div>
            <button onClick={ delay > 500 ? () => setDelay(500) : () => setDelay(9999999) }>{ delay === 500 ? 'Pause' : "Solve"}</button>
            <button onClick={() => {
                setDiskCount(prevDisks => prevDisks + 1)
                setDelay(9999999)
                }}>Add Disk</button>
            { towerData.disks !== 0 && <button onClick={() => {
                setDiskCount(prevDisks => prevDisks - 1)
                setDelay(9999999)
                }}>Remove Disk</button>}
            <button onClick={() => setReset(prev => !prev)}>Reset</button>
        </>
    )
}