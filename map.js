const items = [1,2,3,4,5,5];

function cb(element){
    return element*element
}

function map (array,cb){
    let newArray = []
    for(let index=0; index < array.length; index++){
        newArray.push(cb(array[index]))
    }
    return newArray
}

module.exports = map(items,cb)