/**
 * @ Description
 * Map is known as a dictonary, is an abstract data typw that stores a collection of key-value pairs. it provides an efficint way to associate values with unique key and values assigned to those keys.
 * 
 * commonly supported operations
 *      Insertion: add a new key-value pair.
 *      reterival: accessing the value with given key.
 *      update: modifying the value associate to the key.
 *      Deletion: removing a key value pair form map.
 *      Existence check: verify ia a key exists in the map.
 *      iteration: iterating over all key-value pairs in the map.
 * 
 * common properties of map
 * .set
 * .get
 * .has
 * .delete
 * .clear removes all key-value pairs from the map
 * 
 */

//creating a map
let myMap=new Map();
//.set is used to set keys and values in map
myMap.set('name', 'pankaj');
myMap.set('age',24);
myMap.set('city', 'Mandawa');

//retrieing values using .get method
console.log(myMap.get('name'));

myMap.set('age',25);
console.log(myMap.get('age'));
// delete a key and its value
myMap.delete('city');
//checking existence if city is there in map or not, is returns true and false
console.log(myMap.has('city'));

myMap.set('city', 'Mandawa');
console.log(myMap.get('city'));

//iterating over key-value pairs

myMap.forEach((value,key)=>{
    console.log('${key}: ${value}');
});