function addNumbers(){

    let sum = 0;
   // console.log(arguments);
    for(let i=0; i<arguments.length;i++)
    {
        sum+=arguments[i];
    }

    return sum;
}


console.log(addNumbers(10,20));
console.log(addNumbers(10,20,30));
console.log(addNumbers(10,20,30,40));
console.log(addNumbers(10,20,30,40,50));
console.log(addNumbers(10,20,30,40,50,60));
console.log(addNumbers(10,20,30,40,50,60,70));
