function myIsInString(haystack, needle) {
    let end = needle.length
    let bool = false

    for (let i = 0; i < haystack.length; i++) {
        let z = 0
        let y = 0
        if (haystack[i] == needle[y]) {
            z = i
            while (haystack[z] == needle[y]) {
                z += 1
                y += 1
                
            }
        }
    }

    return bool
}