function getLength(string) {
    let i = 0
    while (string[i])
        i++
    return i
}


function my_str_compare(string, compare, index) {
    let fact = false

    for (const i = 0; string[index] == compare[i]; i++) {
        if (i == (getLength(compare) - 1)) {
            fact = true;
            break
        } index += 1
    }
    return fact;
}

function myIsInString(haystack, needle) {
    let fact = false

    for (let i = 0; i < getLength(haystack); i++) {
        if (haystack[i] == needle[0])
            if (fact = my_str_compare(haystack, needle, i)) break
    }
    return fact
}