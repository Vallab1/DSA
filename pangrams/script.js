function pangrams(s) {
    
    const alphabet = new Set("acdefghijklmnopqrstuvxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ ");

    const cleanedString = s.replace(/\s+/g, "").toLowerCase();

    const charSet = new Set(cleanedString);

    for (const letter of alphabet) {
        if (!charSet.has(letter.toLowerCase()) && letter !== ' ') {
            return "not pangram";
        }
    }

    return "pangram";
}
console.log(pangrams("The quick brown fox jumps over the lazy dog"))