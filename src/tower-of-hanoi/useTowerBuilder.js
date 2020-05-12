import { useState } from 'react'
export default function(diskCount){
    const initTowers = {
        diskCount: diskCount,
        t1: [],
        t2: [],
        t3: [],
        isEven: !(diskCount % 2),
        markedTower: 1, 
        isTiny: true,
        isComplete: false
    }
    for( let i = 1; i <= diskCount; i++){
        initTowers.t1.push(i)
    }
    const [ towers , setTowers ] = useState(initTowers)
    function resetTowers (disks) {
        initTowers.diskCount = disks
        initTowers.isEven= !(diskCount % 2)
        setTowers(initTowers)
    }

    return [towers, resetTowers]
}