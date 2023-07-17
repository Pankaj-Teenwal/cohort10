/**
 * const nums = [1, 2, -1, 3, 1, 6, 3, 7, -9, -1];

/**
 * @description Method to find two sum pair
 * @param {Numer[]} arr
 * @param {Numer} k
 * @returns {Number[]}
 */

function findTwoElementPair(nums, k) {
    //mapping of the object
    let pairs = [];
    const mapping = {};

    for (let i = 0; i < nums.length; i++) {
        let key = nums[i];

        if (mapping.hasOwnProperty(key)) {
            mapping[key] = mapping[key] + 1;
        }
        else {
            mapping[key] = 1;
        }
    }

    //getting all the keys as array
    const objkeys = Object.keys(mapping);
    console.log(objkeys);
    
    //convert all keys string to numbers
    const objkeysNumber=[];
    for(let i=0; i<objkeys.length;i++)
    {
        const number=parseInt(objkeys[i]);
        objkeysNumber.push(number);
    }

    console.log(objkeysNumber);

    for(let i=0; i<objkeysNumber.length;i++)
    {
        let firsrPairElement=objkeysNumber[i];
        for(let j=0; j<objkeysNumber;j++)
        {
            let secondPairElement=objkeysNumber[j];

            if((firsrPairElement+secondPairElement)===k){
                pairs.push(firsrPairElement);
                pairs.push(secondPairElement);
            }
        }
    }



    return pairs;
}


const nums = [1, 2, -1, 3, 1, 6, 3, 7, -9, -1];
console.log(findTwoElementPair(nums, 7));
