const repeatString = function(text, num) {
    let repeatedText="";
    if(num < 0){
        repeatedText="ERROR"
    }else{
        for(i = 0; i < num; i++){
            repeatedText += text;
        }
    }    
    return repeatedText;
}

module.exports = repeatString
