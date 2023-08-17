const addNumbers = (...numbers)=>{
    let sum =0;
    for(let i=0;i<numbers.length;i++)
    {
        sum+=numbers[i];
    }
    return sum;
}

const addNumbersV2 = (a,b)=>a+b;

console.log(addNumbers(10,20));
//console.log(addNumbersV2(100,20));

console.log(addNumbers(10,50,90,50));
console.log(addNumbers(10,80,90,85,63,25));