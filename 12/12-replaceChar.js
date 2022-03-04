function replaceCharacter(str) {
    let newStr = '';

    for(let i=0; i<str.length; i++) {
        // Convert the current character to the corresponding ASCII code first.
        // Then increment it by 1 and convert it back to the string representation of the code.
        let currentCharCode = str.charCodeAt(i);
        let char = String.fromCharCode(++currentCharCode);
        newStr += char;
    }
    
    console.log(newStr);
    return newStr;
}

replaceCharacter('abc')