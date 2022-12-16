const items = [1,2,3,4,5,5];

function cb(element,value){

    return element > value;
}

function filter (array,cb,value){
    let resultArray = []
    for(let index=0; index < array.length; index++){
         result = cb(array[index],value);
         if (result == true){
            resultArray.push(array[index])
         }
    }
    return resultArray;
}


module.exports = filter(items,cb,2)