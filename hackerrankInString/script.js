function hackerrankInString(s) {
    const target = "hackerrank"; // Target string we want to check
    let targetIndex = 0; // Pointer to track the position in the target string

    for (let i = 0; i < s.length; i++) { // Loop through each character in the input string
        if (s[i] === target[targetIndex]) { // Check if the current character matches the target character
            targetIndex++; // Move to the next character in the target string
        }
        if (targetIndex === target.length) { // If all characters in the target string are found
            return "YES"; // Return "YES" since the subsequence exists
        }
    }

    return "NO"; // Return "NO" if the subsequence isn't found
}
// console.log(hackerrankInString());