// https://www.codecademy.com/code-challenges/code-challenge-calculate-the-mean-and-mode-javascript

const statsFinder = (array: number[]): number[] => {

    let sum = (total, i) => total + i
    let mean = 0

    let mode = 0
    let count = 0
    let arrayQty = {}

    // Mean
    mean = array.reduce(sum) / array.length

    // Mode
    /* 
    This for checks if the element already exist in the arrayQty objetc.
    If not, its value becomes 1, otherwise it adds + 1
    */
    for (let i of array) {
        if (!arrayQty[i]) {
            arrayQty[i] = 1
        }
        else {
            arrayQty[i] += 1
        }
    }

    /*
    This for checks whether the value of each element in the object its greater than another elemente. Then, it saves
    the elemente in mode varivabel
    */

    for (let i of array.reverse()) {
        if (arrayQty[i] >= count) {
            mode = i
            count = arrayQty[i]
        }
    }

    return [mean, mode]
}


console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300, 100, 100, 100, 100]))
