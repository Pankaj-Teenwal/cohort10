/**
 * @description Here we are trying to map a empty object to keep the occurances of element. by given array
 * 
 * step-1: Create a function that take array input
 * step-2:create a empty object;
 * ster-3: create a for loop and itrate over array.
 * step-4: create a key vaiable and assign every values of array index
 * step-5 then simply check wether the key is avaliable in object if yes then increase the key value+1, else map that key in object
 * step-6 at the end simply return the object
 */

function countOccurances(arr)
{
    const mapping={};

    for(let i=0; i<arr.length; i++)
    {
        const key=arr[i];

        if(mapping.hasOwnProperty(key)){
            mapping[key]= mapping[key]+1;// ager key hai to update kardo
        }
        else{
            mapping[key]=1; //nahi hai to regester me new key add kardo
        }
    }

    return mapping;
}
let arr=[1,2,3,4,1,3,4,6,1,5];
console.log(countOccurances(arr));