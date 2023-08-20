const arr = [8,4,5,7,3,6];

const output = arr.reduce((acc, curr)=>{
    acc+=curr;

    return acc;
}, 0)

console.log(output);

//finding maxElement in this array

const maxElement = arr.reduce((acc,currentElem)=>{
    if(acc<currentElem){acc=currentElem};
    return acc;
}, 0)

console.log(maxElement);