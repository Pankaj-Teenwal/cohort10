const arr = [5,1,3,2,6];

// let sum =0;
// for( let item of arr){
//     sum+=item;
// }

// console.log(sum);

// let sum =0;
// for(let i=0; i<arr.length;i++)
// {
//     sum+= arr[i] ;  
// }
// console.log(sum)

//New ES6 way

const result = arr.reduce((previousVal, currentVal,index, arrElem)=>{
    console.log({previousVal, currentVal, index, arrElem});

    previousVal += currentVal;
    return previousVal;
}, 0);