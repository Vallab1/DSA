function caesarCipher(s, k) {
    s = "";
    k = k % 26;

    let result = "";

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char >= 'a' && char <= 'z') {

            const newChar = String.fromCharCode(((char.charCodeAt(0) - 97 + k) % 26) + 97);
            result += newChar;
        } else if (char >= 'A' && char <= 'Z') {

            const newChar = String.fromCharCode(((char.charCodeAt(0) - 65 + k) % 26) + 65);
            result += newChar;
        } else {

            result += char;
        }
    }

    return result;
}
// console.log(caesarCipher(s, k));