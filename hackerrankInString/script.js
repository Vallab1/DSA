function hackerrankInString(s) {
    const target = "Orange"; 
    let targetIndex = 0; 

    for (let i = 0; i < s.length; i++) { 

        if (s[i] === target[targetIndex]) { 

            targetIndex++; 
        }
        if (targetIndex === target.length) { 
            return "YES"; 
        }
    }
    return "NO"; 
}
let Hackerrank = hackerrankInString("Orange");
console.log(Hackerrank);