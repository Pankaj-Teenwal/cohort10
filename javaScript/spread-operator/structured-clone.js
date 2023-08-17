/**structuredClone() method creates a deep clone of a given calue using the structured clone algorithm
 * 
 * the method also allows transferable objects in the original vlue to be transferred rather then cloned to the new object, transferred objects are detached from the original object and attached to the new object, they are no longer accessible in the original object.
 */


let obj = {name: "pankaj", lastName:"Teenwal", details:{
    rollNo: 123, class:"12th"
}};

let obj2 = structuredClone(obj);

console.log({obj});

obj2.name="arvind";
obj2.details.rollNo = 789;
console.log({obj2});