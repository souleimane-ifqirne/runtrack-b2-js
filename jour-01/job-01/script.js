function myUpperCase(string) {
    let str = ""
    const obj = {a: 'A', b: 'B', c: 'C', d: 'D', e: 'E', f: 'F', g: 'G', h: 'H', i: 'I', k: 'K', l: 'L', m: 'M', n: 'N', o: 'O', p: 'P', q: 'Q', r: 'R', s: 'S', t: 'T', u: 'U', v: 'V', w: 'W', x: 'X', y: 'Y', z: 'Z'};

    for (let i  = 0; i < string.length; i++)
        obj[string[i]] != undefined ? str += obj[string[i]] : str += string[i];
    return str
}

console.log(myUpperCase("wesh ALORS"));
