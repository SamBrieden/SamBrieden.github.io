import React, { useState, useEffect } from 'react'
import Towers from './Towers.js'
import useTowerBuilder from './useTowerBuilder.js'

export default function () {
    const [ diskCount, setDiskCount ] = useState(3)
    const [ initTowers, resetTowers ] = useTowerBuilder(diskCount)
    const [ towerData , setTowers ] = useState(initTowers)
    const [ reset, setReset ] = useState(false)
    console.log('new render')
    useEffect(() => {
        setTowers(resetTowers(diskCount))
    }, [ diskCount, reset ])
    return <Towers  towerData={towerData} setDiskCount = {setDiskCount} setReset={setReset}/>
}