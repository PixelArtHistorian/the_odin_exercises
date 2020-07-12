const palindromes = function(palindrome) {
    let tempString = palindrome.toLowerCase()
    let characters = Array.from(tempString).filter(x => (x!==" " && x!=="," && x!==";" && x!=="." && x!=="!" && x !=="?"));
    let charactersReversed = Array.from(tempString).filter(x => x!==" " && x!=="," && x!==";" && x!=="." && x!=="!" && x !=="?").reverse();
    for(let i=0; i<characters.length; i++){
        if(characters[i]!==charactersReversed[i]){
            return false;
        }
    }
    return true;
}

module.exports = palindromes
console.log(palindromes("Racecar!"));