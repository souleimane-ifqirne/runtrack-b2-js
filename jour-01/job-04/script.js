function getLength(string) {
    let i = 0
    while (string[i])
        i++
    return i
}

function myArraySum(array) {
    let total = 0;

    for (let i = 0; i < getLength(array); i++) total += array[i]
    return total
}