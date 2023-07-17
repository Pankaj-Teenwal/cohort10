/**
 * @description By using rest operator (...) in objext destructuring, we can pull all the remaining keys of an objext in a new object variable.
 * 
 * 
 */

const num={
    a:100, 
    b:200,
    c:300,
    d:400,
    e:500,
};

const{a, b, ...args}=num;

console.log(`${a}, ${b}, ${args}`);
console.log({a, b, args})