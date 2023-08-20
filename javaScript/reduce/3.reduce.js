const user = [
    {firstName: "pankaj", lastName: "teenwal", age:26},
    {firstName: "arvind", lastName: "teenwal", age:24},
    {firstName: "deepak", lastName: "parjapati", age:26},
    {firstName: "rajat", lastName: "sharma", age:23},
    {firstName: "ishu", lastName: "karwasara", age:23},
];
//find number of same age:  26:2, 24:1, 23:2

const output = user.reduce((acc,curr)=>{
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }

    return acc;
}, {})

console.log(output);