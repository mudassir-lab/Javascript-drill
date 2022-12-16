const items = [1,2,3,4,5,5];

function cb(startingValue, element){
    return startingValue + element
} 

function reduce (array,cb,initialValue){
    let accumlator = initialValue
    for(let index=0; index < array.length; index++){
        if (accumlator !== undefined){
            accumlator = cb(accumlator, array[index]);
        }
        else{
            
            accumlator = array[index];
        }
    }
    return accumlator;
}

module.exports = reduce(items,cb);
