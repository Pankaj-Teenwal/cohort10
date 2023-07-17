/**
 * @description 
 * In js an object is a data structure that allows us to store and manipulate key-value pairs.
 * 
 * An object is a collection of properties, where each property consists of a key and a corresponding value.
 */

//How to create a object

const person={
    name: 'pankaj',
    age:24,
    city: 'mandawa'
};

// Using Object Constructor
const student=new Object();
student.name='pankaj';
student.class='10';
student.rollNo=20;
student.city='Mandawa'

//To find avaliable keys in object we use 
//Object.keys(object);

//console.log(Object.keys(student));


//To find avaliable values in object we use Object.values(object)

//console.log(Object.values(student));

//Object.entries(objet) simply return an array containing the key-value pairs of the object as array

console.log(Object.entries(student));