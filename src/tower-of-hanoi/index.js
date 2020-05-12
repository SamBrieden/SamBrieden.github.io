import React, { useState, useEffect } from 'react'
import Towers from './Towers.js'
import useTowerBuilder from './useTowerBuilder.js'

export default function () {
    const [ diskCount, setDiskCount ] = useState(3)
    const [ towerData, resetTowers ] = useTowerBuilder(diskCount)
    useEffect(() => {
        resetTowers(diskCount)
    }, [ diskCount ])
    return <Towers  towerData={towerData} setDiskCount = {setDiskCount}/>
}