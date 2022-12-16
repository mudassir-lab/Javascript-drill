const items = [1,2,3,4,5,5];

function cb(element,index){
    console.log(element,index);
}

function forEach (array,cb){
    for(let index=0; index < array.length; index++){
        cb(array[index],index);
    }
}

forEach(items,cb);


module.exports = forEach(items,cb)
