/**
 * 
 * spread operator operators are used to make shallow copy of js objects. it only create the deep copy of top-level data and a shallow copy of the nested data.
 * 
 * let array = ['h','e','y'];
 * 
 * let array1 = [...array];
 */

let obj1 = {
    name: "pankaj", address: "mandawa", details:
        { phone: 9079716171, email: "pankajkumarmdw1998@gmail.com" },
    isMarried: "No",
}

console.log(obj1);

let obj2 = { ...obj1, lastName: "Teenwal", DOB: "10-12-1998" };
obj2.details.phone = 12345;
obj2.details.email = "arvind@gmail.com";
console.log(obj1);
console.log({ obj2 })
