function addNumbers(...numbers){
    let sum =0;
    console.log(numbers);
    for(let i=0; i<numbers.length;i++)
    {
        sum+=numbers[i];
    }
    return sum;
}

console.log(addNumbers(10,20));
console.log(addNumbers(10,20,30));

console.log(addNumbers(10,20,30,40));
console.log(addNumbers(10,20,30,40,50));
console.log(addNumbers(10,20,30,40,50,60));