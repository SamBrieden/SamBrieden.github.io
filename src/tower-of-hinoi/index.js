const diskCount = 1

    !diskCount && console.log("Please Add Disks")

const isEven = !(diskCount % 2)
const t1 = []
const t2 = []
const t3 = []
for (let i = 0; i < diskCount; i++) {
    t1.push(i + 1)
}

function move(a, b) {
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
    console.log(t1, t2, t3)
}

function hinoiAlgorithm(markedTower, count) {
    let mark
    //Move smallest disk to next tower
    if (isEven) {
        if (markedTower !== 3) {
            mark = markedTower + 1
            move(markedTower, mark)
            if (markedTower === 1) {
                t1[0] > t3[0] ? move(3, 1) : move(1, 3)
            } else {
                t1[0] > t2[0] ? move(2, 1) : move(1, 2)
            }

        } else {
            mark = 1
            move(3, 1)
            t3[0] > t2[0] ? move(3, 2) : move(2, 3)
        }

    } else {
        if (markedTower !== 1) {
            mark = markedTower - 1
            move(markedTower, mark)
            if (markedTower === 3) {
                t1[0] > t3[0] ? move(3, 1) : move(1, 3)
            } else {
                t1[0] > t2[0] ? move(2, 1) : move(1, 2)
            }
        } else {
            mark = 3
            move(1, 3)
            console.log(t1[0] > t2[0])
            t1[0] > t2[0] ? move(2, 1) : move(1, 2)
        }
    }
    if (diskCount === t3.length) {
        console.log('Success!', count + 1)
    } else {
        hinoiAlgorithm(mark, count + 1)
    }
}

hinoiAlgorithm(1, 0)
// console.log(t1, t2, t3)