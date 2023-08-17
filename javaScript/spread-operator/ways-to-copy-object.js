/**
 * object.assign()
 * The Object.assign() method is used to copy the values and properties from one or more source     objects to a target object.
 * Object.assign(target, ...sources)
 * 
 */

let obj1 = {name: "pankaj", lastName:"Teenwal", details:{rollNo: 12345, class:"12th"}};
console.log(obj1);

let obj2 = Object.assign({},obj1);
obj2.name= "arvind";
obj2.details.rollNo = 789;
console.log(obj2);

