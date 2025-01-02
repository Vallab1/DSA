function camelCase(s) {
    let count = 1; 
    for (let i = 0; i < s.length; i++) {
        if (s[i] >= 'A' && s[i] <= 'Z') {
            count++;
        }
    }
    return count;
}
let s = "orangeLemonMango";
// let output = camelCase(s);
console.log(camelCase(s)); 
