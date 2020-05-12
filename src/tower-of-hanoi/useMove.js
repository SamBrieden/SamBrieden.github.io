import { useState } from 'react'

export default function (towerData = {diskCount: 5, t1: [1,2,3,4,5], t2: [], t3: [], isEven: false, markedTower: 1, isTiny: true, isComplete: false}) {
    const [ disks , setDisks] = useState(towerData)

    function move(a, b) {
        setDisks( prevDisks => {
            const { t1, t2, t3, diskCount, isTiny } = prevDisks
            if(diskCount === t3.length){
                return { ...prevDisks, isComplete: true }
            }
            let fromTower
            if (a === 1) {
                fromTower = t1.shift()
            } else if (a === 2) {
                fromTower = t2.shift()
            } else {
                fromTower = t3.shift()
            }
            if (b === 1) {
                t1.unshift(fromTower)
            } else if (b === 2) {
                t2.unshift(fromTower)
            } else {
                t3.unshift(fromTower)
            }
            if(isTiny) {
                return { ...prevDisks, t1, t2, t3, isTiny: false, markedTower: b }
            } else {
                return { ...prevDisks, t1, t2, t3, isTiny: true }
            }
        })
    }

    function moveDisk (a, b) {
        const { isTiny, t1, t2, t3, isEven, markedTower } = disks
        if(typeof a !== 'number' || typeof b !== 'number' ) {
            if(isTiny && isEven) {
                if (markedTower !== 3) {
                    move(markedTower, markedTower + 1)
                } else {
                    move(3, 1)
                }
            } else if (isTiny && !isEven){
                if (markedTower !== 1) {
                    move(markedTower, markedTower - 1)
                } else {
                    move(1, 3)
                }
            } else {
                if (markedTower === 1) {
                    if (!t2[0] || !t3[0]) {
                        !t2[0] && move(3, 2)
                        !t3[0] && move(2, 3)
                    } else {
                        t2[0] > t3[0] ? move(3, 2) : move(2, 3)
                    }
                } else if (markedTower === 2) {
                    if (!t1[0] || !t3[0]) {
                        !t1[0] && move(3, 1)
                        !t3[0] && move(1, 3)
                    } else {
                        t1[0] > t3[0] ? move(3, 1) : move(1, 3)
                    }
                } else {
                    if (!t1[0] || !t2[0]) {
                        !t1[0] && move(2, 1)
                        !t2[0] && move(1, 2)
                    } else {
                        t1[0] > t2[0] ? move(2, 1) : move(1, 2)
                    }
                }
            }
        } else {
            a === 1 && t1[0] && move(a, b)
            a === 2 && t2[0] && move(a, b)
            a === 3 && t3[0] && move(a, b)
        } 
    }    
    return [ disks, moveDisk ]

}