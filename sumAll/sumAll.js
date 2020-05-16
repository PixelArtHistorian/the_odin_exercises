const sumAll = function(num1, num2) {
    let result = 0;
    if((typeof num1 != 'number' || typeof num2 != 'number') 
        || 
        (num1<0 || num2<0)){
        result = 'ERROR'
    }else{
        let upper, lower;
        upper = (num1>=num2)? num1 : num2;
        lower = (num1>=num2)? num2 : num1;
        for(let i = lower; i <= upper; i++){
            result += i;
        }
    }
    return result;
}
module.exports = sumAll
