const nestedArray = [1, [2], [[3]], [[[4]]]];

console.log(typeof(typeof(nestedArray)))

var flatArray = []

function flatten (array){

    for(let i=0; i < array.length; i++){
        if (typeof(array[i]) === 'object'){
            flatten (array[i])
        }
        else{
            flatArray.push(array[i])
        }
    }
    return flatArray;
}

module.exports = flatten(nestedArray)