const reverseString = function(text) {
    let reversedText = "";
    for(let char of text){
        reversedText = char + reversedText;
    }
    return reversedText;
}

module.exports = reverseString
