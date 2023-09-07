function getLength(string) {
    let i = 0
    while (string[i])
        i++
    return i
}


function myCountChar(haystack, needle) {
    let count = 0;

    for (let i = 0; i < getLength(haystack); i++) haystack[i] == needle ? count += 1 : count = count;
    return count
}