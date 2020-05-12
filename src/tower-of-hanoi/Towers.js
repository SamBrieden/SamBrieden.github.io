import React, { useState, useEffect } from 'react'
import useMove from './useMove.js'
import useInterval from './useInterval.js'

export default function ({ towerData, setDiskCount }) {
    const [ delay, setDelay ] = useState(9999999)
    const [ disks , moveDisk] = useMove(towerData)
    useInterval(moveDisk, delay)
    return (
        <>
            <div>Tower One { disks.t1.join(' ') }</div>
            <div>Tower Two { disks.t2.join(' ') }</div>
            <div>Tower Three { disks.t3.join(' ') }</div>
            <button onClick={ delay > 500 ? () => setDelay(500) : () => setDelay(9999999) }>{ delay === 500 ? 'Pause' : "Solve"}</button>
            <button onClick={() => setDiskCount(prevDisks => prevDisks + 1)}>Add Disk</button>
            { towerData.disks !== 0 && <button onClick={() => setDiskCount(prevDisks => prevDisks - 1)}>Add Disk</button>}
        </>
    )
}