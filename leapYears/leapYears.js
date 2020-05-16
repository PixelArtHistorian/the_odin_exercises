const leapYears = function(year) {
    let result;
    if(typeof year != 'number'){
        result = 'ERROR';
    }else{
        result = (year%4 === 0 && year%100 != 0) || (year%400 ===0);
    }
    return result;
}

module.exports = leapYears
