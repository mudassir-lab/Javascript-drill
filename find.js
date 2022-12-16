const items = [1,2,3,4,5,5];

function cb(element,value){

    return element === value;
}

function find (array,cb,value){
    for(let index=0; index < array.length; index++){
         result = cb(array[index],value);
         if (result == true){
            return array[index]
         }
    }
    return undefined;
}

module.exports = find(items,cb,2)

