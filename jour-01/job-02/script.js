function myCountChar(haystack, needle) {
    let count = 0;

    for (let i = 0; i < haystack.length; i++) haystack[i] == needle ? count += 1 : count = count;
    return count
}

console.log(myCountChar("Hello World", "o"))