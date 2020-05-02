const removeFromArray = function(array) {
    let args = Array.from(arguments);
    if(args.length > 1){
        for (let j = 1 ; j< args.length; j++){
            for( let i = 0; i < array.length; i++){
                if(array[i] === args[j]){
                    array.splice(i,1);
                }
            }
        }       
    }
    
    return array;
}

removeFromArray([1, 2, 3, 4], 3);

module.exports = removeFromArray
