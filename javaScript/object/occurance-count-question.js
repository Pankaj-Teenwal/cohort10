/**
 * @description we have this array=> 
 *  const names = [
    "ankit",
    "chirag",
    "mitesh",
    "mahesh",
    "ankit",
    "sanket",
    "Sanket"
  ];

  we want to count the occurance of the elements using object

  here we have to handel the uppercases and lowercases
 */
function countOccurances(arr){
    const mapping={};
    
    for(let i=0; i<arr.length; i++)
    {
       // arr[i]=arr[i].toLowerCase();

        const key=arr[i];

        mapping.hasOwnProperty(key) ? mapping[key]++ : (mapping[key]=1);
        console.log(mapping);
    }

    return mapping;

}

  const names = [
    "ankit",
    "chirag",
    "mitesh",
    "mahesh",
    "ankit",
    "sanket",
    "Sanket"
  ];

  console.log(countOccurances(names));