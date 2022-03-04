function removeCharacter(str, char, index) {
    if(str.length === 0) alert('String is empty');
    if(str.charAt(index) !== char) alert("Unable to find this character");
    
    let newStr = '';
    for(let i=0; i<str.length; i++) {
        if(i !== index) newStr += newStr.charAt(i);
    }

    return newStr;
}