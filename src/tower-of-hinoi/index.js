import React, { useState } from 'react'

export default function () {
    const [ disks , setDisks] = useState({diskCount: 5, t1: [1,2,3,4,5], t2: [], t3: [], isEven: false, markedTower: 1, isTiny: true, isComplete: false })

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

    function hinoiAlgorithm () {
        const { isTiny, t1, t2, t3, isEven, markedTower } = disks
        console.log('even', isEven, 'tiny', isTiny)
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
    }
    console.log(disks.isTiny)
    return (
        <>
            <div>Tower One { disks.t1.join(' ') }</div>
            <div>Tower Two { disks.t2.join(' ') }</div>
            <div>Tower Three { disks.t3.join(' ') }</div>
            <button onClick={ hinoiAlgorithm }>Next move</button>
        </>
    )
}