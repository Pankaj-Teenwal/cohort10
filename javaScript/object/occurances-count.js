/**@description
 * step-1: First we ceate a function for counting the occurences & pass this string into that function
 * step-2; in function then create a empty object.
 * 
 * step-3: then we simply itrate the array using for loop.
 * step-4 then we check that the array element is in the object or not if yes then we store the key in the object and the occerences
 * step-5: else map the object with 1
 * at last simply return the object  
 */




const names = [
    "ankit",
    "chirag",
    "mitesh",
    "mahesh",
    "ankit",
    "sanket",
    "Sanket"
  ];
  
  const countNames = (input) => {
    // Write your code here
    
    //creating the empty object
    const mapping={};

    //created the loop for itrating the array
    for(let i=0; i<input.length;i++)
    {   
        input[i]=input[i].toLowerCase();

        const key = input[i];
        if(mapping.hasOwnProperty(key)){
            mapping[key]=mapping[key]+1;
        }
        else{
            mapping[key]=1;
        }
    }
    return mapping;
  };
  
  console.log(countNames(names));
  // Output -  {"ankit": 2, "chirag": 1, "mitesh": 1, "mahesh": 1, "sanket" : 2}
  