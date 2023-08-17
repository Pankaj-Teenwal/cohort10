/**When we directly assign any object in another object then it will create a shallow copy of the obect, means the second object still points at the parent object, and the changes we do in new object reflects in the parent object as well */

let obj1 = {
    name: "pankaj", address: "mandawa", details:
        { phone: 9079716171, email: "pankajkumarmdw1998@gmail.com" },
        isMarried:"No",
}

console.log(obj1);

let obj2 = obj1;

obj2.name = "pankaj";
console.log(obj2)
