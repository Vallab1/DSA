function minimumNumber(n, password) {
    // Define the character sets
    const numbers = "0123456789";
    const lower_case = "abcdefghijklmnopqrstuvwxyz";
    const upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const special_characters = "!@#$%^&*()-+";

    // Flags to check if each character type is present
    let hasDigit = false;
    let hasLower = false;
    let hasUpper = false;
    let hasSpecial = false;

    // Check each character in the password
    for (let char of password) {
        if (numbers.includes(char)) hasDigit = true;
        if (lower_case.includes(char)) hasLower = true;
        if (upper_case.includes(char)) hasUpper = true;
        if (special_characters.includes(char)) hasSpecial = true;
    }

    // Count missing character types
    let missingTypes = 0;
    if (!hasDigit) missingTypes++;
    if (!hasLower) missingTypes++;
    if (!hasUpper) missingTypes++;
    if (!hasSpecial) missingTypes++;

    // Calculate the minimum characters needed to meet length and type requirements
    return Math.max(missingTypes, 6 - n);
}

// Example usage
console.log(minimumNumber(3, "Ab1")); // Output: 3
console.log(minimumNumber(11, "#HackerRank")); // Output: 1